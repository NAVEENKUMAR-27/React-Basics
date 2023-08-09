import React, { useState } from 'react'
import { Menu } from '../../Menu/menu'


const Condtion_render = () => {
    const[logIn,setLogIn]=useState()
    
    const handleLoginToggle = () => {
        setLogIn(setLog => !setLog);
    };

    return (
        <>
        <Menu/>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className="card text-center mt-5">
                        <img src="https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ="  className="card-img-top" style={{width:200,height:250,marginLeft:60}}/>
                    {logIn ? (
                        <div>
                            <h3 className='font-weight-bold text-success'>Welcome! You are logged in.</h3>
                            <button onClick={handleLoginToggle} className="btn btn-danger">Log Out</button>
                        </div>
                        ) : (
                            <div>
                            <h3 className='font-weight-bold text-danger'>Please log in to continue.</h3>
                            <button onClick={handleLoginToggle} className="btn btn-primary">Log In</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}


export default Condtion_render


