import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Datapassing from "./data_passing";


export function Basicfunprops(){

    const coders=[
        {id:1, img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxmMBO3vRil-ORcHLSi4wLzYCevjNpJOPDhPhnsi1jhDuY7ysv",name:"Dennis Ritchie",text:"Dennis Ritchie “Father of the C programming language"},
        {id:2, img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkX45a1tQQSUinM5dJtlJOkozGxinV0_mRRPRmIXi3dvnqSyRm",name:"Linus Torvalds",text:"He is the founder and coordinator of the Linux kernel Operating system"},
        {id:3, img:"https://www.engineering.columbia.edu/files/seas/styles/816x460/public/content/cs_image/2018/05/stroustrup-newsite.jpg?itok=0G_DuFmp",name:" Bjarne Stroustrup",text:"He invented and evolved the most widely used programming language C++ all by himself in Bell Lab"},
        {id:4, img:"https://2.bp.blogspot.com/-Wo8QaQtpx6o/VzlfSA_K29I/AAAAAAAAAB8/vNVP9ihUamIubSKNmACGmC5bx-qZyzFfQCLcB/s1600/jamesgosling_webcornz.jpg",name:"James Gosling",text:"Father of Java programming language’. He created the mainframe for Java also implemented the original compiler and virtual machine"},
        {id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3W6T7qGEoatWMi927yZockMdaevhCXGJwScqqluEADxno0I6GzsAaYLnr08VQvC5RrE&usqp=CAU",name:"Tim Berners-Lee",text:"“Tim” Berners-Lee is also known as “TimBL,” is a British computer scientist and is popularly known for 3 fundamental technologies HTML, URL, and HTTP"},
        {id:6, img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNCCIt2ZMS7k8pRy8z5lF327uLb2XTnNu6Wwll55Fju_ZoIJqJ",name:"Donald Knuth",text:"Donald Ervin Knuth is an American computer scientist, mathematician, and Professor Emeritus(retired) at Stanford University. He has earned the title of the“Father of the analysis of algorithms” "},
    ];
    

    return(<>
            <div className="container">
            <h1 className="text-center pt-5 font-weigth-bold">Top Programmers in the World </h1>
                <div className="row justify-content-between pt-5">
                {coders.map((value)=>(
                    <div className="col-lg-4 pt-5">
                        <div className="card">
                            <img src={value.img} alt="no need image try agine later"  className="card-img-top "/>
                            <div className="card-body">
                                <h3 className="card-title text-primary">{value.name}</h3>
                                <p className="card-text">{value.text}</p>

                            </div>
                        </div>

                    </div>
                ))}
                </div>
                <Datapassing data={coders}/>
            </div>
    
    
    
    
    
    </>)
}