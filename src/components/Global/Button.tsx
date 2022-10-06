import { useGoogleAuth } from '../../hooks';
import { GoogleAuthButtonProps } from '../../interfaces';

// Google auth button
const GoogleAuthButton = (googleAuthButtonProps: GoogleAuthButtonProps) => {
  const [googleButton] = useGoogleAuth(googleAuthButtonProps);

  return <div ref={googleButton}></div>;
};

export { GoogleAuthButton };
