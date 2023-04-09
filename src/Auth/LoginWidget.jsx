import {Redirect} from "react-router-dom";
import {userOktaAuth} from "@okta/okta-react";
import { SpinnerLoading } from "../layouts/Utils/SpinnerLoading";

const LoginWidget = ({config}) => {
    const {oktaAuth, authState} = userOktaAuth();
    const onSuccess = (token) => {
        oktaAuth.handleLoginRedirect(token);
    };

    const onError = (err) => {
        console.log('Sing in error', err);
    }

    if(!authState) {
        return (
            <SpinnerLoading />
        );
    }

    return authState.isAuthenticated ? 
    <Redirect to={{pathname: '/' }}/>
    :
    <diV></diV>
}

export default LoginWidget;