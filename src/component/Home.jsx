import React, { Component } from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return ( 
            <>
        <h2 className="text-center">Home</h2>
        <a href="/employee">Employee</a>
        </>
        );
    }

}

export default Home;