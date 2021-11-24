import React, { Component } from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends Component 
{
    constructor()
    {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    componentDidMount() 
    {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies:response.data}) //Got rid of movies aspect as it is looking for DATA not specifically movies
        })
        .catch((error)=>{console.log(error)});
    }

    ReloadData()
    {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies:response.data}) //Got rid of movies aspect as it is looking for DATA not specifically movies
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
                 <Movies movies={this.state.movies} ReloadData = {this.ReloadData}></Movies> {/*Pass component/method down */}
            </div>
        );
    }
}
