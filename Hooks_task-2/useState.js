import React,{useState} from "react"
import"bootstrap/dist/css/bootstrap.css"


export function Hookstask(){
    const[generate,setGenerate]=useState("");
    const[incres,setIncres]=useState(1);
    const[letter,setLetter]=useState("");
    const[bgColor,setBgColor]=useState('');
    const[letterCount,setLetterCount]=useState("");



    const randomNumber =() =>{
        const add=Math.floor(Math.random()*100)+1;
        setGenerate(add);
    }


    const handleIncrement =() =>{
        const count= incres+1;
        setIncres(count);

    }

    const handleText=(event)=>{
        setLetter(event.target.value);
    }

    const colorChanger=(e)=>{
        setBgColor(e.target.value);
    }

    const handelLetterCount=(e)=>{
        setLetterCount(e.target.value)
        
    }
    
        return(<>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card col-lg-10">                            
                            <h4>Generate Random Number</h4>
                                {generate!== "" &&  <h2>{generate}</h2>}                   
                            <div className="card-body">
                                <button onClick={randomNumber}>Generate</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card col-lg-10">
                            <h4>Incrementaion Number</h4>
                            {incres !== 1 &&<h2>{incres}</h2>    }                        
                            <div className="card-body">
                                <button onClick={handleIncrement}>increse</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className="card col-lg-10">
                                <input type="text" value={letter} onChange={handleText} />
                                                        
                            <div className="card-body">
                                <p>type: {letter}</p>

                            </div>

                        </div>

                    </div>
                    
                </div>

                <div className="row ">
                        {/* color change task */}
                    <div className="col-lg-4">
                        <select onChange={colorChanger}>
                            <option value="">select color</option>
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="black">black</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                        </select>
                        <div style={{ backgroundColor: bgColor ,width:'100px',height:'100px'}}></div>
                    </div>


                    <div className="col-lg-4">
                        <input type="text" value={letterCount} onChange={handelLetterCount} />
                        <p>Letter Count : {letterCount.length}</p>
                        

                    </div>

                </div>
            </div>
        
        
        
        </>)
}