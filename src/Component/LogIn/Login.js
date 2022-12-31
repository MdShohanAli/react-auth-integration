import React from 'react'
import useFirebase from '../../useFirebase/useFirebase'
const Login = () => {
    const { singInWithGoogle } = useFirebase()

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }} >
                <button onClick={singInWithGoogle} >sign up google</button>
            </div>
            <form >
                <input type="email" placeholder='please input your email' />
                <br />
                <input type="password" placeholder='please input your password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;