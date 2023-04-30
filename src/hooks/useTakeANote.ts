import type { ChangeEvent, MouseEvent } from 'react';
import { useReducer, useRef } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Todo } from '@/types/todos/Todo';
import { debounce } from '@/utils/debounce';

type TodoFormData = Pick<Todo, 'title' | 'body'>;

type TakeANoteState = {
  isPinned: boolean;
  showColorSelector: boolean;
  isTakeANoteClicked: boolean;
  selectedBackground: string;
};

const TAKE_A_NOTE_TYPES = {
  SET_PINNED: 'SET_PINNED',
  SET_SHOW_COLOR: 'SET_SHOW_COLOR',
  SET_TAKE_NOTE_CLICKED: 'SET_TAKE_NOTE_CLICKED',
  SET_SELECTED_BACKGROUND: 'SET_SELECTED_BACKGROUND',
};

type TakeANoteAction =
  | { type: typeof TAKE_A_NOTE_TYPES.SET_PINNED; payload: string }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_SHOW_COLOR; payload: string }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED; payload: string }
  | { type: typeof TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND; payload: string };

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
      return { ...state, isPinned: !state.isPinned };
    case TAKE_A_NOTE_TYPES.SET_SHOW_COLOR:
      return { ...state, showColorSelector: !state.showColorSelector };
    case TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED:
      // @ts-ignore
      return { ...state, isTakeANoteClicked: action.payload };
    case TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND:
      return { ...state, selectedBackground: action.payload };
    default:
      return state;
  }
};

export const useTakeANote = () => {
  const { register, handleSubmit } = useForm<TodoFormData>();
  const [state, dispatch] = useReducer(takeANoteReducer, initialState);

  const ref = useRef(null);

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    console.log(data);
  };

  const debounceSubmit = debounce(handleSubmit(onSubmit), 500);

  function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    debounceSubmit();

    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const backgroundColor =
    state.selectedBackground !== 'inherit'
      ? `bg-${state.selectedBackground}-200`
      : 'bg-inherit';

  const handlePinClick = () => {
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_PINNED, payload: '' });
  };

  const handleTakeANoteClicked = (val: boolean) => {
    // @ts-ignore
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_TAKE_NOTE_CLICKED, payload: val });

    if (val) {
      dispatch({
        type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
        payload: 'inherit',
      });
    }
  };

  const handleShowColorSelector = () => {
    dispatch({ type: TAKE_A_NOTE_TYPES.SET_SHOW_COLOR, payload: '' });
  };

  const handleSelectBackgroundColor = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!ref.current) return;
    // @ts-ignore
    const datasetBg = e.target.closest('[data-bg]')?.dataset?.bg;

    if (datasetBg) {
      console.log({ datasetBg, state });
      dispatch({
        type: TAKE_A_NOTE_TYPES.SET_SELECTED_BACKGROUND,
        payload: datasetBg,
      });
    }
  };

  return {
    ref,
    state,
    register,
    onSubmit,
    handleSubmit,
    handleTextAreaChange,
    backgroundColor,
    handlePinClick,
    handleTakeANoteClicked,
    handleShowColorSelector,
    handleSelectBackgroundColor,
  };
};
