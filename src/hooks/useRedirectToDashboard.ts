import { getDataInLocalStorage, localStorageKeys } from '../utils';

const useRedirectToDashboard = () => {
  const user = getDataInLocalStorage(localStorageKeys.USER);
  console.log(user);

  if (user) return true;

  return false;
};

export default useRedirectToDashboard;
