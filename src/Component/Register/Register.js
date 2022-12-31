import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form >
                <input type="text" placeholder='please input your name' />
                <br />
                <input type="email" placeholder='please input your email' />
                <br />
                <input type="password" placeholder='please input your password' />
                <br />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;