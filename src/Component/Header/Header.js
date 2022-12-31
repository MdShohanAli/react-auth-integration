import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';

import './Header.css'


const Header = () => {
    const { user, handleSignOut } = useFirebase()

    return (
        <div className='header' >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">product</Link>
                <Link to="/order">order</Link>
                <Link to="/register">register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>log out</button>
                        :
                        <Link to="/login"> login </Link>
                }



            </nav>
        </div>
    );
};

export default Header;