import { useState, useEffect } from "react";

type ValueSetter<T> = (value: T | ((prevValue: T) => T)) => void;

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, ValueSetter<T>] => {

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
  
};

export { useLocalStorage }
