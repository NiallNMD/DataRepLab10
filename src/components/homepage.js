import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <button type="button" class="btn btn-primary">Primary</button>

            </div>
        );
    }
}
export default Homepage;