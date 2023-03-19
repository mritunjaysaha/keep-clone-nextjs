import { useState } from 'react';

export const useSafeLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);

      return item ? <T>JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value of localStorage

  const setValue = (value: T | React.SetStateAction<T>) => {
    // Allow value to be a function so we have same API as useState

    const valueToStore = value instanceof Function ? value(storedValue) : value;

    // Save state
    setStoredValue(valueToStore);

    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
};
