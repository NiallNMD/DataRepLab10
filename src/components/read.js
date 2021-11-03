import React, { Component } from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends Component 
{
    componentDidMount() 
    {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies:response.data.mymovies})
        })
        .catch((error)=>{console.log(error)});
    }
    state = 
    {
        movies: []
    };
    render() {
        return (
            <div>
                <h1>This is the read Component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
