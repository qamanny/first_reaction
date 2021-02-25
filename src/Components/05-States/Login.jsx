'use strict';

import {useState} from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let button;



    const printDetails = p => {
        p.preventDefault();
        console.log(username, password);
        if (isLoggedIn) {
            return button
        }
    };


    return(
        <>
           
           <form onSubmit={printDetails}>
           <label> Username:</label>
                <input name="username"
                type="text"
                value={username}
                onChange={p => setUsername(p.target.value)}/>

            <label> Password: </label>
                <input type="password"
                value={password}
                onChange={p => setPassword(p.target.value)}/>
            <br/>
            <button>Sumbit</button>
            </form>
        </>
    );

}

export default Login;