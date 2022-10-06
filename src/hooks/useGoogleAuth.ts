import { GoogleAuthButtonProps } from '../interfaces';
import { useEffect, useRef } from 'react';
import { handleCredentialResponse, loadScript } from '../utils';

const useGoogleAuth = ({
  type = 'standard',
  theme = 'outline',
  size = 'large',
  text = 'continue_with',
  shape = 'rectangular',
  logo_alignment = 'center',
  width,
  locale,
  oneTapEnabled = false,
}: GoogleAuthButtonProps) => {
  // Creating DOM Ref for auth button
  const googleButton = useRef(null);

  useEffect(() => {
    const src =
      process.env.REACT_APP_GOOGLE_AUTH_SCRIPT ??
      'https://accounts.google.com/gsi/client';

    const id = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

    // Load the JS script
    loadScript(src)
      .then(() => {
        // Initialize the auth process
        (window as any).google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        });

        // Render the button
        (window as any).google.accounts.id.renderButton(googleButton.current, {
          type,
          theme,
          size,
          text,
          shape,
          logo_alignment,
          width,
          locale,
          oneTapEnabled,
        });

        // For One-Tap login
        if (oneTapEnabled) (window as any).google.accounts.id.prompt();
      })
      .catch(console.error);

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`);
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  return [googleButton];
};

export default useGoogleAuth;
