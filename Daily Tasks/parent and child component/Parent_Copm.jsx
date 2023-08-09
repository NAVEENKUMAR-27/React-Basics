import React,{useState} from 'react'
import { Child_B } from './Child_B'
import { Child_A } from './Child_A'
import { Menu } from '../../Menu/menu'




export const Parent_Copm = () => {
    const[change,setChange]=useState(false)
    
    const handleChange=()=>{
        setChange(newChange=>!newChange )
    }
    const style={
        border:"4px double black",
        
    }

        return(<>
            <Menu/>
            <div className='container'>
                <div className="row justify-content-center ">
                    <div className='col-lg-6 card  bg-light mt-5 pt-5' style={style}>
                            <h3 className="text-center font-weight-bold pb-3">Parent and Child component task</h3>
                            <img src=""/>
                        
                        <div className='card-body text-center'>
                        {change ? <Child_A/>: <Child_B/> }
                            <button type="button" onClick={handleChange} className="btn btn-warning font-weight-bolder" >{change? "Virat" :"MSD"}</button>
                        </div>

                    </div>

                </div>

            </div>
        
        </>)

        
    }
