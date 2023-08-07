import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"


export default class Classprops extends Component{
    render(){
        
        return(<>
        <div className="App mt-5 pt-5">
            <h1 className="text-primary" >My Name : {this.props.name}</h1>
            <h5>From :<span className="text-primary">{this.props.place}</span></h5>
            <p className="text-danger ">{this.props.quotes}</p>
        </div>

            </>
        )
    }
}