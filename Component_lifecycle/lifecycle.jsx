import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentDidUpdate() {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    incrementCount = () => {
        this.setState((event) => ({ count: event.count + 1 }));
    };

    render() {
        console.log('Render');
        return (
        <div className='App mt-5'> 
            <div className='bg-light'>
                    <h1 className='font-weight-bold '>Component Life Cycle </h1>
                    <h3 className='font-weight-bold mt-3 '>Count:  <span className='text-danger'>{this.state.count}</span></h3>
                    <button type="button" className="btn btn-outline-success m-3" onClick={ this.incrementCount }>Success</button>
            </div>
        </div>
        );
    }
}

export default Lifecycle;
