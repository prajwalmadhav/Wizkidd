import { getDataInLocalStorage, localStorageKeys } from '../utils';

const useUserData = () => {
  const user = getDataInLocalStorage(localStorageKeys.USER);

  if (user) return user;

  return false;
};

export default useUserData;
