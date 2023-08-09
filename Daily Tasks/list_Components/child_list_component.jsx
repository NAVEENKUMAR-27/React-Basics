import React from 'react'
import { Menu } from '../../Menu/menu'

export const Child_list = ({items,play,code}) => {
    /*item= fruites array name*/ 
    /*play =cricket player names array*/
    /*code= code editor name arrays*/
    return (<>
    
        <div className='container bg-light '>
                <h2 className='font-weight-bold text-center mt-5 text-info'>Props Concept</h2>
            <div className='row justify-content-between mt-5'>
                        
                <div className='card col-lg-3'>
                        <h4 className='font-weight-bold text-danger card-header'>Fruits</h4>
                        <ul className='font-weight-bold text-danger'>
                            {items?.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                </div> 

                <div className='card col-lg-3'>           
                        <h4 className='font-weight-bold text-primary card-header'>Cricket Player</h4>
                        <ul className='font-weight-bold text-primary'>
                            {play?.map((list)=>(
                                <li>{list}</li>
                            ))}
                        </ul>
                </div>

                <div className='card col-lg-3'>       
                        <h4 className='font-weight-bold text-warning card-header '>Code editors</h4>
                        <ol className='font-weight-bold text-warning '>
                            {code?.map((e)=>(
                                <li>{e}</li>
                            ))}
                        </ol>
                </div>     
            </div> 
        </div> 
        
                            
    </>
    )
}
