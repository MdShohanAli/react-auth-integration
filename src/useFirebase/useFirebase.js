import { useState, useEffect } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Component/Firebase/Firebase.init'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();




const useFirebase = () => {
    const [user, setUser] = useState({})



    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user);
            })
        // .cath(error => {
        //     console.error(error);
        // })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return {
        user,
        singInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;