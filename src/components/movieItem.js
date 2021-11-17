import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export class MovieItem extends React.Component {
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
                </Card>
            </div>
        );
    }
}
