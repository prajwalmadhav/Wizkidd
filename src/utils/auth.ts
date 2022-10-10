import { apiRoutes, generateUniqueID, makeAPICall } from '.';
import { GoogleAuthResponse } from '../interfaces';

const handleCredentialResponse = async (authResponse: GoogleAuthResponse) => {
  console.log(authResponse);

  // Get Auth Token
  const { credential } = authResponse;

  // Create request payload
  const payload = {
    id: generateUniqueID(),
    credential,
  };

  const { status } = await makeAPICall({
    method: 'POST',
    url: apiRoutes.userAuth,
    data: payload,
  });

  // 1. Save response in localstorage
  if (status) {
    
  }
};

export { handleCredentialResponse };
