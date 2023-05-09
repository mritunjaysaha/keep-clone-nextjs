type ColorName =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'violet'
  | 'gray'
  | 'rose';

type EditorThemeType = {
  backgroundColor: {
    [key in ColorName]: string;
  };
  buttonColor: {
    [key in ColorName]: string;
  };
};

export const editorTheme: EditorThemeType = {
  buttonColor: {
    red: 'bg-red-400',
    orange: 'bg-orange-400',
    yellow: 'bg-yellow-400',
    green: 'bg-green-400',
    teal: 'bg-teal-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    pink: 'bg-pink-400',
    violet: 'bg-violet-400',
    gray: 'bg-gray-400',
    rose: 'bg-rose-400',
  },
  backgroundColor: {
    red: 'bg-red-200',
    orange: 'bg-orange-200',
    yellow: 'bg-yellow-200',
    green: 'bg-green-200',
    teal: 'bg-teal-200',
    blue: 'bg-blue-200',
    purple: 'bg-purple-200',
    pink: 'bg-pink-200',
    violet: 'bg-violet-200',
    gray: 'bg-gray-200',
    rose: 'bg-rose-200',
  },
};
