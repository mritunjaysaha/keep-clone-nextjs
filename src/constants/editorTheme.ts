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
  backgroundColor: {
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
  buttonColor: {
    red: 'bg-red-300',
    orange: 'bg-orange-300',
    yellow: 'bg-yellow-300',
    green: 'bg-green-300',
    teal: 'bg-teal-300',
    blue: 'bg-blue-300',
    purple: 'bg-purple-300',
    pink: 'bg-pink-300',
    violet: 'bg-violet-300',
    gray: 'bg-gray-300',
    rose: 'bg-rose-300',
  },
};
