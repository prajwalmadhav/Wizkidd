import { apiRoutes, generateUniqueID, localStorageKeys, makeAPICall } from '.';
import { GoogleAuthResponse } from '../interfaces';
import { setDataInLocalStorage } from './function';

const handleCredentialResponse = async (authResponse: GoogleAuthResponse) => {
  console.log(authResponse);

  // Get Auth Token
  const { credential } = authResponse;

  // Create request payload
  const payload = {
    id: generateUniqueID(),
    credential,
  };

  const { status, data = {} } = await makeAPICall({
    method: 'POST',
    url: apiRoutes.userAuth,
    data: payload,
  });

  // If status is true
  if (status) {
    // 1. Save response in localstorage
    setDataInLocalStorage(localStorageKeys.USER, data);

    // TODO: 2. Redirect to Dashboard
  } else throw new Error("User can't ve verified");
};

export { handleCredentialResponse };
