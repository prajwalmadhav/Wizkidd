import { UseUserDataType } from '../interfaces';
import { getDataInLocalStorage, localStorageKeys } from '../utils';



const useUserData = ()  => {
  const user = getDataInLocalStorage(localStorageKeys.USER) as UseUserDataType;

  if (user) return user;

  // return false;
};

export default useUserData;
