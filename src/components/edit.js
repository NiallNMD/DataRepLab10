import React, { Component } from 'react';
import axios from 'axios';

export class Edit extends React.Component {
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
    //When component is used/shown, this will show/do the function.
    componentDidMount() { 
        console.log(this.props.match.params.id);
        //get id from search bar and put details in fill in Edit
        axios.get('http://localhost:4000/api/movies/' +this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title: response.data.Title,
                Year: response.data.Year,
                Poster: response.data.Poster,
                _id: response.data._id
            })
        })
        .catch();
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
            Poster: this.state.Poster
        }

        //Interacts with the server.js version of PUT and updates the value thats in the database with what was written in the button.
        axios.put('http://localhost:4000/api/movies/'+ this.state._id, NewMovie)
        .then()
        .catch();
        
        //Using POST Method sending to this url, passing NewMovie to server. 
        // axios.post('http://localhost:4000/api/movies', NewMovie)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

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
                <h1>This is the Edit  Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Edit Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />

                        <label>Edit Release Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeReleaseYear}
                        />

                        <label>Edit poster url: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Edit Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;