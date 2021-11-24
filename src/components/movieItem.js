import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component {

    constructor()
    {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this); //must bind Delete Movie to use lower sections of code.
    }

    DeleteMovie(e)
    {
        e.preventDefault(); //only make DeleteMovie run ONCE.

        console.log("Delete: " + this.props.movie._id);
        //Goes to link to remove selected movie
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> */}

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>

                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className='btn btn-primary'>Edit</Link>  {/*When clicked move to this movie */}
                    <Button variant="danger" onClick = {this.DeleteMovie}>Delete</Button> {/*When clicked delete this movie - Bootstrap button */}
                </Card>
            </div>
        );
    }
}
