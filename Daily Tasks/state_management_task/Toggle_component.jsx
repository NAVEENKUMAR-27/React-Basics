import React,{useState} from 'react'
import { Toggle_OFF } from './toggle_child';
import { Toggle_ON } from './toggle_child';
import { Menu } from '../../Menu/menu';


const Toggle_component = () => {
    /*declaring initial state for counter*/
    const [isOn, setIsOn] = useState(false);
    
    /*Button on off Function*/
    const toggleButton = () => {
        setIsOn(!isOn);
    }
    /*inline Styling*/
    const bgColor={
        border: "3px solid green"
    }
    return (
        <>
        <Menu/> 
        <div className='container row mt-5'>
                <div className='col-lg-5'></div>
                <div className='col-lg-7  mt-5 text-center bg-dark' style={bgColor}>
                    <h1 className='font-weight-bold text-success pt-5'>Save Energy <span  className='text-danger'>Don't Waste</span></h1>
                        <h1>{isOn ? <Toggle_ON/>:<Toggle_OFF/>   }</h1>

                    <div class="custom-control custom-switch w-100">
                        <input type="checkbox" class="custom-control-input" onClick={toggleButton} id="customSwitch1"/>
                        <label class="custom-control-label font-weight-bold text-white"  for="customSwitch1"> {isOn? "OFF":"ON"}</label>
                    </div>
                </div>
                <div className='col-lg-2'></div>
            </div>
            
        </>
    )
}

export default Toggle_component


