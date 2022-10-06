import { GoogleAuthResponse } from '../interfaces';

const handleCredentialResponse = async (authResponse: GoogleAuthResponse) => {
  console.log(authResponse);

  // Get Auth Token
  const { credential } = authResponse;

  // Create request payload
  const payload = {
    // id,
    credential,
  };

  console.log('payload', payload);
};

export { handleCredentialResponse };
