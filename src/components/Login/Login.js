import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Login = () => {
    // const {singInWithGoogle} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>This is login</h3>
            <div style={{margin: '20px'}}>
                <button onClick={ () => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;