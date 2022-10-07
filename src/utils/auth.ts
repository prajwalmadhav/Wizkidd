import { apiRoutes, makeAPICall } from '.';
import { GoogleAuthResponse } from '../interfaces';

const handleCredentialResponse = async (authResponse: GoogleAuthResponse) => {
  console.log(authResponse);

  // Get Auth Token
  const { credential } = authResponse;

  // Create request payload
  const payload = {
    // TODO: Add Dynamic ID
    id: 222,
    credential,
  };

  console.log(payload);

  const response = await makeAPICall({
    method: 'POST',
    url: apiRoutes.userAuth,
    data: payload,
  });

  console.log('response', response);
};

export { handleCredentialResponse };
