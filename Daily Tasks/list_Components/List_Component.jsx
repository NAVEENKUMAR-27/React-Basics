import React from 'react'
import { Child_list } from './child_list_component'
import { Menu } from '../../Menu/menu';



const List_Component = () => {
    /*store the data from array*/
    const fruits =['Apple', 'Banana', 'Orange', 'Mango',"Jackfruit","Papaya"]; 
    const players=["MS Dhoni","Ruturaj Gaikwad","Jadeja","Devon Conway","Ambati Rayudu","Moeen Ali","Shivam Dube","Tushar Deshpande","Matheesha Pathirana","Deepak Chahar","Maheesh Theekshana"];
    const editor=["Vs Code","Note pad" ,"Note pad++","Cofee cup","Sublime Text","Atom","TextMate","Bluefish","Vim" ]

    return (
        <>
        <Menu/>
            <Child_list items={fruits} play={players}  code={editor}/>
        </>
    )
}


export default List_Component