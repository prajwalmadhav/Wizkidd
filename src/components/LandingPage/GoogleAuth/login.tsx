import React from 'react'
import { GoogleLogin } from 'react-google-login'
const clientId = '375893928808-3kf2gshb7dg37hrispa7fpk86an7409f.apps.googleusercontent.com';

function Login () {
  const onSuccess = (res: { profileObj: Object; }) => {
    console.log ( '[Login Success] currentUser:', res.profileObj );
    };
  const onFailure = (res: any) => {
    console.log ( '[Login failed] res:', res );
    };

  return (
    < div >
        <GoogleLogin
            clientId = {clientId}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            style = {{ marginTop : ' 100px ' }}
            isSignedIn = {true}
        />
    </div>
    );
}

export default Login ;