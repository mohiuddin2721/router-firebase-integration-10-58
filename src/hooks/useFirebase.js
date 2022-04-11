import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([]);

    useEffect( () => {

    }, []);

    const singInWithGoogle = () => {
        // console.log('Sign in soon');
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    // return [user, setUser];
    return {
        user, 
        setUser, 
        singInWithGoogle
    }
}

export default useFirebase;