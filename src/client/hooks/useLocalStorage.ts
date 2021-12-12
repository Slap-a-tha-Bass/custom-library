import { useState, useEffect } from "react";

const useLocalStorage = ({key, initialValue}: LocalStorageProps) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;

interface LocalStorageProps {
    key: string;
    initialValue: any;
}