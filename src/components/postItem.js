import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class PostItem extends React.Component {

    constructor() {
        super();
        this.deletePost = this.deletePost.bind(this); //must bind Delete Movie to use lower sections of code.
    }

    deletePost(e) {
        e.preventDefault(); //only make DeletePost run ONCE.

        console.log("Delete: " + this.props.post._id);
        //Goes to link to remove selected movie
        axios.delete("http://localhost:4000/api/posts/" + this.props.post._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            // <div>
            //     <Card>
            //         <Card.Header>{this.props.post.postName}</Card.Header>
            //         <Card.Body>
            //             <blockquote className="blockquote mb-0">
            //                 <footer className="blockquote-footer">
            //                     <p>{this.props.post.PostDate}</p>
            //                 </footer>
            //             </blockquote>
            //         </Card.Body>
            //         <Link to={"/edit/" + this.props.post._id} className='btn btn-primary'>Edit</Link>  {/*When clicked move to this post */}
            //         <Button variant="danger" onClick = {this.deletePost}>Delete</Button> {/*When clicked delete this movie - Bootstrap button */}
            //     </Card>
            // </div>
            <div class="card">
                <div class="card-header" >
                    Author: {this.props.post.postName}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Date Posted: {this.props.post.postDate}</h5>
                    <p class="card-title">Essay: {this.props.post.postEssay}</p>
                    <br></br>
                    <Link to={"/edit/" + this.props.post._id} className='btn btn-outline-dark'>Edit</Link>  {/*When clicked move to this post */}
                    <Button variant="danger" className='btn btn-outline-dark' onClick={this.deletePost}>Delete</Button> {/*When clicked delete this movie - Bootstrap button */}
                    <br></br>

                    <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    test
                                </div>
                                <div class="modal-body">
                                    testing
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                    <a class="btn btn-danger btn-ok">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
