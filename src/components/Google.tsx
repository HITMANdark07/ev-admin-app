import React from 'react';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import { googleClientId } from '../api.config';


const Google = () => {

    const preLoginTracking = (): void => {
        console.log('Attemp to login with google');
    }

    const errorHandler = (error: string): void => {
        // handle error if login got failed...
        console.error(error)
    }

    const responseGoogle = (googleUser: gapi.auth2.GoogleUser): void =>  {
        console.log("running********8")
        const id_token = googleUser.getAuthResponse(true).id_token
        const googleId = googleUser.getId()

        console.log({ googleId })
        console.log({accessToken: id_token})
        // Make user login in your system
        // login success tracking...
    }
    const clientConfig = { client_id: googleClientId }
    return(
        <div className="pb-3">
            {/* <GoogleLogin
                clientId={googleClientId}
                render={renderProps => (
                    <button className="flex justify-center items-center text-white w-56 p-2" style={{
                        backgroundColor: '#db4a39',
                      }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                       LOGIN WITH GOOGLE
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> */}
            <GoogleLoginButton
                responseHandler={responseGoogle}
                singInOptions={{scope: 'profile'}}
                clientConfig={clientConfig}
                // preLogin={preLoginTracking}
                failureHandler={errorHandler}
            >
                <button className="flex justify-center items-center text-white w-full p-2" style={{
                        backgroundColor: '#db4a39',
                      }} >
                       LOGIN WITH GOOGLE
                </button>
            </GoogleLoginButton>
        </div>
    );
};

export default Google;