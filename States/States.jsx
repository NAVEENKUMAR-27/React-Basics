import React, { Component } from 'react'

export class States extends Component {
    constructor(props){
        super();
        this.state={
            make: "Yamaha",
            model: "R15",
            color: "blue"
        }
    }
    changeBikeColor= ()=>{
            this.setState({color:"Red"})
        }
    render() {
        return (
            <div>

            <h2>My{this.state.make}</h2>
    
            <p>It is a <span className='text-warning'>{this.state.color}</span> {this.state.model}.</p>
            <button
                type="button"
                onClick={this.changeBikeColor}
            >Change color</button>
    
        </div>
        )
    }
}


export class Team extends Component {
    constructor(props){
        super(props);
        this.state={
            color:"Red",
            color1:"blue"
        }
    }
        changeColor=()=>{
            this.setState({color:"pink"})
        }
    render() {
        return (
        <div className='App'>
                <h1>{this.state.color} and new Color {this.state.color1}</h1>
                <button onClick={this.changeColor}> change</button>
                    

        </div>
        )
    }
    }




