    import React, { Component } from 'react';

    class Student extends Component {
    constructor(){
        super();
        this.state={
            fname :"Naveen ",
            lname:"Chief"
        }
    }
    render() {
        return (
        <div className="App">
            <h1>Hello {this.state.fname}</h1>
            <h4>wellcome Back {this.state.lname}</h4>
        </div>
        );
    }
    }
    export default Student;