import React,{useState} from 'react'
import { Menu } from '../../Menu/menu';

export const Counter_Coponent = () => {
   

    /*declaring initial state for counter*/
    const[increase,setIncrease]=useState(0);

        /*value increase function*/ 
    const incresaeHandle=()=>{
        const add= increase+1;
        setIncrease(add);
    }

        /*value decrease function with if condition*/ 
    const decreaseHandle=()=>{
        if (increase > 0) {
            const reduce = increase - 1;
            setIncrease(reduce);
    }}

        /*reset function*/
    const resetHandle = () =>{
        setIncrease(increase*0)
    } 

    return (<>
        <Menu/>
            <div className='container bg-light  mt-5 pt-5'>
                <div className=' row'>
                    <div className='col-lg-3'></div>

                    <div className='col-lg-6   text-center mt-5'>
                        <h1 className='font-weight-bold '> Use state to manage the count <span className='text-danger'> {increase} </span></h1>
                        <button type="button"  onClick={incresaeHandle} className="btn btn-success m-2">ADD</button>
                        <button type="button" className="btn btn-danger m-2" onClick={decreaseHandle}>SUBT</button>
                        <button type="button" className="btn btn-primary m-2" onClick={resetHandle}>RESET</button>
                    </div>    
                    <div className='col-lg-3'></div>

                </div>

            </div>

    </>
        
    )
}
