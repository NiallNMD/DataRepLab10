import React, { Component } from 'react';
import axios from 'axios';

export class Create extends React.Component {
    constructor() {
        super();
        //Needed to handle events or it will fail
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeReleaseYear = this.onChangeReleaseYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: '',

        }
    }

    handleSubmit(event) {
        console.log(this.state.Title);
        console.log(this.state.Year);
        console.log(this.state.Poster);
        alert("Movie Name: " + this.state.Title + "\nMovie Year: " + this.state.Year + "\nMovie Poster: " + this.state.Poster);

        //Passing information to server
        const NewMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Title
        }
        //Using POST Method sending to this url, passing NewMovie to server. 
        axios.post('http://localhost:4000/api/movies',NewMovie)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

        event.preventDefault();

        this.setState({
            Title: '',
            Year: '',
            Poster: '',
        })
    }





    onChangeMovieName(event) {
        this.setState({ Title: event.target.value });
    }

    onChangeReleaseYear(event) {
        this.setState({ Year: event.target.value });

    }

    onChangePoster(event) {
        this.setState({ Poster: event.target.value });

    }
    render() {
        return (
            <div>
                <h1>This is the Create  Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />

                        <label>Add Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeReleaseYear}
                        />

                        <label>Add poster url: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
