import React from 'react';
import {Button} from "@material-ui/core"
import "./Login.css";
import { auth, provider } from './firebase';
function Login() {
    const signIn = () => {
            auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
           
            <div className="login__logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wO8Li503_LR_HN5XtMTUlbrqU5oNYnWuTg&usqp=CAU" alt="logo"/>
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
