import type { ChangeEvent, MouseEvent } from 'react';
import { useReducer, useRef } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { editorTheme } from '@/constants/editorTheme';
import type { Todo } from '@/types/todos/Todo';
import { debounce } from '@/utils/debounce';

type TodoFormData = Pick<Todo, 'title' | 'body'>;

type TakeANoteState = {
  isPinned: boolean;
  showColorSelector: boolean;
  isTakeANoteClicked: boolean;
  selectedBackground: string;
};
type TakeANoteAction =
  | { type: typeof TAKE_A_NOTE_TYPES.SET_PINNED; payload: boolean }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_SHOW_COLOR; payload: boolean }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED; payload: boolean }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND; payload: string };
const TAKE_A_NOTE_TYPES = {
  SET_PINNED: 'SET_PINNED',
  SET_SHOW_COLOR: 'SET_SHOW_COLOR',
  SET_TAKE_NOTE_CLICKED: 'SET_TAKE_NOTE_CLICKED',
  SET_SELECTED_BACKGROUND: 'SET_SELECTED_BACKGROUND',
};

const initialState: TakeANoteState = {
  isPinned: false,
  showColorSelector: false,
  isTakeANoteClicked: false,
  selectedBackground: 'inherit',
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
    default:
      return state;
  }
};

const { backgroundColor } = editorTheme;
export const useTakeANote = () => {
  const { register, handleSubmit } = useForm<TodoFormData>();
  const [state, dispatch] = useReducer(takeANoteReducer, initialState);

  const ref = useRef(null);

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    console.log(data);
  };

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  const resetStates = () => {
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_PINNED, payload: '' });
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_SHOW_COLOR, payload: '' });
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
      payload: 'inherit',
    });
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debounceSubmit();

    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handlePinClick = () => {
    dispatch({
      type: TAKE_A_NOTE_TYPES.SET_PINNED,
      // @ts-ignore
      payload: !state.isPinned,
    });
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

  const handleSelectBackgroundColor = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!ref.current) return;
    // @ts-ignore
    const datasetBg: string = e.target.closest('[data-bg]')?.dataset?.bg;

    if (datasetBg) {
      if (datasetBg !== 'inherit') {
        dispatch({
          type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
          payload: datasetBg,
        });
      } else {
        dispatch({
          type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,

          // @ts-ignore
          payload: backgroundColor[datasetBg],
        });
      }
    }
  };

  return {
    ref,
    state,
    register,
    onSubmit,
    handleSubmit,
    handleTextAreaChange,
    handlePinClick,
    handleTakeANoteClicked,
    handleShowColorSelector,
    handleSelectBackgroundColor,
  };
};
