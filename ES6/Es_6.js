import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import React, { createElement } from "react";

export function Es6(){

        const show = () =>{console.log("hello world")};
        show();
        
    

    return(
        <>
            {/* Es6 Array  functions */}
            <p> </p>

        </>
    )
}

        // react element createing with jsx

export function CreateElement(){
    const name="NK";
    const one="Bro"
    
    return createElement(
        'span',
        {style:{backgroundColor:"red"}},
        'hello',
        createElement('i',null,name),
        'welcome',

        
    )
}

