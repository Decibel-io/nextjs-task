import { ILocalStorageKeys } from '@/types/global';
import { isClient } from '@/utils';

export const useLocalStorage = <T extends ILocalStorageKeys>(key: T) => {
  if (isClient()) {
    const item = localStorage.getItem(key);
    const setItem = (value: string) => localStorage.setItem(key, value);
    const clearStorage = () => localStorage.clear();
    const removeItem = () => localStorage.removeItem(key);
    return { item, setItem, clearStorage, removeItem };
  }
  return {};
};
