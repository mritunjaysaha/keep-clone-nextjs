import type { ChangeEvent, MouseEvent } from 'react';
import { useEffect, useMemo, useReducer, useRef } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';

import { editorTheme } from '@/constants/editorTheme';
import { useAppSelector } from '@/hooks/redux';
import { createOrUpdateTodo } from '@/request/httpCalls/todo/createOrUpdateTodo';
import type { ImageType } from '@/types/common/imageType';
import type { Todo } from '@/types/todos/Todo';
import { debounce } from '@/utils/debounce';

type TodoFormData = Pick<Todo, 'todoTitle' | 'todoBody'>;

type SelectedLabels = { labelId: string; isChecked: boolean };

const TAKE_A_NOTE_TYPES = {
  SET_PINNED: 'SET_PINNED',
  SET_SHOW_COLOR: 'SET_SHOW_COLOR',
  SET_TAKE_NOTE_CLICKED: 'SET_TAKE_NOTE_CLICKED',
  SET_SELECTED_BACKGROUND: 'SET_SELECTED_BACKGROUND',
  SET_SELECTED_FILES: 'SET_SELECTED_FILES',
  SET_SELECTED_LABELS: 'SET_SELECTED_LABELS',
};

type TakeANoteAction = {
  type:
    | typeof TAKE_A_NOTE_TYPES.SET_PINNED
    | typeof TAKE_A_NOTE_TYPES.SET_SHOW_COLOR
    | typeof TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED
    | typeof TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND
    | typeof TAKE_A_NOTE_TYPES.SET_SELECTED_LABELS;
  payload: boolean | string | SelectedLabels;
};

type TakeANoteState = {
  isPinned: boolean;
  showColorSelector: boolean;
  isTakeANoteClicked: boolean;
  selectedBackground: string;
  imagePreviews: string[];
  selectedLabels: { [key: string]: boolean };
};

const initialState: TakeANoteState = {
  isPinned: false,
  showColorSelector: false,
  isTakeANoteClicked: false,
  selectedBackground: 'inherit',
  imagePreviews: [],
  selectedLabels: {},
};

const takeANoteReducer = (
  state: TakeANoteState,
  action: TakeANoteAction,
): TakeANoteState => {
  switch (action.type) {
    case TAKE_A_NOTE_TYPES.SET_PINNED:
      return { ...state, isPinned: Boolean(action.payload) };
    case TAKE_A_NOTE_TYPES.SET_SHOW_COLOR:
      return { ...state, showColorSelector: Boolean(action.payload) };
    case TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED:
      return { ...state, isTakeANoteClicked: Boolean(action.payload) };
    case TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND:
      return { ...state, selectedBackground: String(action.payload) };
    // case TAKE_A_NOTE_TYPES.SET_SELECTED_FILES:
    //   return {
    //     ...state,
    //     // @ts-ignore
    //     imagePreviews: [...state.imagePreviews, ...action.payload],
    //   };
    case TAKE_A_NOTE_TYPES.SET_SELECTED_LABELS:
      if (!Object.keys(action.payload).length) {
        return { ...state, selectedLabels: {} };
      }

      // eslint-disable-next-line
      const { labelId, isChecked } = action.payload as SelectedLabels;
      return {
        ...state,
        selectedLabels: {
          ...state.selectedLabels,
          [labelId]: isChecked,
        },
      };

    default:
      return state;
  }
};

const { backgroundColor } = editorTheme;
export const useTakeANote = () => {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();
  const [state, dispatch] = useReducer(takeANoteReducer, initialState);

  const { email, labels } = useAppSelector((reduxState) => reduxState.user);

  useEffect(() => {
    console.log('[state]', state.selectedLabels);
  }, [state]);

  const ref = useRef(null);
  const todoId = useMemo(() => uuidV4(), [state.isTakeANoteClicked]);

  // @ts-ignore
  const currentBackgroundColor = backgroundColor[state.selectedBackground];

  const updateTodo = async (data: Todo) => {
    await createOrUpdateTodo(email, todoId, data);
  };

  const onSubmit: SubmitHandler<TodoFormData> = async (data) => {
    const todoData: Todo = {
      todoTitle: data.todoTitle as string,
      todoBody: data.todoBody,
    };

    await updateTodo(todoData);
  };

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  const resetStates = () => {
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_PINNED, payload: false });
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_SHOW_COLOR, payload: '' });
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
      payload: 'inherit',
    });
    // dispatch({ type: TAKE_A_NOTE_TYPES.SET_SELECTED_FILES, payload: [] });
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SELECTED_LABELS,
      payload: {} as SelectedLabels,
    });

    reset();
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debounceSubmit();

    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handlePinClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_PINNED,
      // @ts-ignore
      payload: !state.isPinned,
    });

    // await createOrUpdateTodo(email, todoId, { isPinned: !state.isPinned });

    await updateTodo({ isPinned: !state.isPinned });
  };

  const handleTakeANoteClicked = (val: boolean) => {
    // @ts-ignore
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED, payload: val });

    resetStates();
  };

  const handleShowColorSelector = () => {
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SHOW_COLOR,

      payload: !state.showColorSelector,
    });
  };

  const handleSelectBackgroundColor = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!ref.current) return;
    // @ts-ignore
    const datasetBg: string = e.target.closest('[data-bg]')?.dataset?.bg;

    if (datasetBg) {
      if (datasetBg === 'inherit') {
        dispatch({
          type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
          payload: 'inherit',
        });
      } else {
        dispatch({
          type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,

          // @ts-ignore
          payload: datasetBg,
        });
      }
      await updateTodo({ theme: datasetBg });
    }
  };

  const handleFileSelectorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const newSelectedImages: ImageType[] = [];

    for (let i = 0, len = files?.length ?? 0; i < len; i += 1) {
      const file = files[i];

      if (!file) return;

      const reader = new FileReader();

      reader.readAsDataURL(file);

      const image = new Image();
      reader.onload = (event) => {
        image.src = event.target?.result as string;

        newSelectedImages.push({ id: uuidV4(), src: image.src });

        // dispatch({
        //   type: TAKE_A_NOTE_TYPES.SET_SELECTED_FILES,
        //   payload: newSelectedImages,
        // });
      };
    }
  };

  const handleSelectedLabels = (e: ChangeEvent<HTMLInputElement>) => {
    const labelId = e.target.id;

    const label = labels[labelId];

    const isCurrentLabelChecked = state.selectedLabels[labelId];

    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SELECTED_LABELS,
      payload: { labelId, isChecked: !isCurrentLabelChecked },
    });

    console.log(
      '[TakeANote][handleSelectedLabels]',
      {
        labelId,
        label,
        isCurrentLabelChecked,
      },
      state.selectedLabels,
    );
  };

  const handleRemoveLabels = (labelId: string): void => {
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SELECTED_LABELS,
      payload: { labelId, isChecked: false },
    });
  };

  return {
    ref,
    state,
    register,
    onSubmit,
    handleSubmit,
    handlePinClick,
    handleRemoveLabels,
    handleSelectedLabels,
    handleTextAreaChange,
    handleTakeANoteClicked,
    handleShowColorSelector,
    handleFileSelectorChange,
    handleSelectBackgroundColor,
    currentBackgroundColor,
  };
};
