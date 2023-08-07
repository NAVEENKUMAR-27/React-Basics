import React from "react";
import"bootstrap/dist/css/bootstrap.css"
import { Details } from "./props_passing";


const Datapassing=(props)=>{
    const details={
            name:"NaveenKumar",
            place:"Mettupalayam",
            age:23,
            grade:"A+",
            blood:"O+ve"
    }
    return(<>
        
            {props?.data?.map((key) =>{
            return(
                <h3>* {key.name}</h3>

                ) }
            )}
            
        <Details type={details} />
    </>

        )
}
export default Datapassing;