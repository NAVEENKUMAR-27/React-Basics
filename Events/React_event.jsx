import React, { useState } from 'react'

export const React_event = () => {
        const[letter,setLetter]=useState();
        const[password,setPassword]=useState()
        const[user,setUser]=useState();

        const handleText =(e)=>{
            setLetter(e.target.value)

        }
        const alerthandle=()=>alert("Hello Naveen")


        const passwordHanlechange = (e) => setPassword(e.target.value)

        const userHandlechange = (e) => setUser(e.target.value)

        const onSubmitHandle = (e) =>  {
            e.preventDefault()
            alert("Submited  "+user +password )
        }

        

    return ( <>
                <div className="container  justify-content-between">
                        <div className='row justify-content-between col-12 '>
                                              {/* key event */}

                            <div className="card col-lg-4 mt-5">
                                <h4 className='text-center font-weight-bold pt-2'>OnKeyChange Event </h4>
                                    <input type="text"  className="mt-3 "value={letter} onChange={handleText} />
                                <div className="card-body">
                                    <p className=' font-weight-bold pt-2'>type: {letter}</p>
                                </div>

                            </div>


                            <div className='card col-lg-4 mt-5'>
                                <h2 className='text-center font-weight-bold pt-2'>Onclick</h2>
                                <button type="button" className="btn btn-primary" onClick={alerthandle}>Alert</button>

                            </div>
                        </div>    

                                        {/* form event */}

                            <div className='row col-lg-12 justify-content-center mt-5'>
                                    <div className="card col-5">
                                        <h3 className='font-weight-bold text-center'>Login </h3>
                                    <form onSubmit={onSubmitHandle}>  
                                        <div class="card-body">
                                            
                                                <label>Username : </label>
                                                <input type="text"   value={user}  required  placeholder ="enter username " onChange={userHandlechange}/> <br/>
                                                <label>Password .: </label>
                                                <input type="password"    value={password} required  placeholder ="Enter Password" onChange={passwordHanlechange}/>
                                            

                                        </div>
                                        <div className='card-foot text-center'>
                                                <button type="submit" class="btn btn-success ">Submit</button>

                                        </div>
                                    </form>    

                                    </div>


                            </div>

                </div>

        </>
    )
}
