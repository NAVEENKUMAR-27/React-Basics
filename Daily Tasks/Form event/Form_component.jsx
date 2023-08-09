    import React, { useState } from 'react';
import { Menu } from '../../Menu/menu';

export const Form_valid = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginToggle = () => {
        if (isLoggedIn) {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
        } else {
        if (!username || !password) {
            setError('Please fill in both username and password.');
        } else {
            const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

            if (usernameRegex.test(username) && passwordRegex.test(password)) {
            setIsLoggedIn(true);
            setError('');
            } else {
            setError(
                "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit."
            );
            }
        }
        }
    };

    return (
        <>
            <Menu/>
        <div className="container ">
            <div className='row justify-content-center mt-5'>
            <div className='card text-center col-lg-6'>
                {isLoggedIn ? (
                            <div>
                            <h1>Welcome  <span className='font-weight-bold text-primary'> {username}! </span></h1>
                            <button onClick={handleLoginToggle} className='btn btn-danger'>Log Out</button>
                            </div>
                        ) : (
                            <div>
                            <h1 className='font-weight-bold '>Please log in to continue.</h1>
                            <form onSubmit={e => e.preventDefault()}>
                                <div>
                                <label >Username : </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    placeholder='Enter Username'
                                    className='mt-3'
                                />
                                </div>
                                <div>
                                <label >Password :</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Enter password'
                                    className='mt-3'
                                />
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <button onClick={handleLoginToggle} className="btn-success btn mt-5">Log In</button>
                            </form>
                            </div>
                        )}
                </div>
            </div>    
        </div>    
        </>
    );
    };

    
