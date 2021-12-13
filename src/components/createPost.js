import React, { Component } from 'react';
import axios from 'axios';

export class CreatePost extends React.Component {
    constructor() {
        super();
        //Needed to handle events or it will fail
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePostName = this.onChangePostName.bind(this);
        this.onChangePostDate = this.onChangePostDate.bind(this);
        this.onChangePostEssay = this.onChangePostEssay.bind(this);

        this.state = {
            postName: '',
            postDate: '',
            postEssay: '',

        }
    }

    handleSubmit(event) {
        console.log(this.state.postName);
        console.log(this.state.postDate);
        console.log(this.state.postEssay + "here 1");
        alert("Author name: " + this.state.postName + "\nPost Date: " + this.state.postDate + "\nPost Essay : " + this.state.postEssay);

        //Passing information to server
        const NewPost = {
            postName: this.state.postName,
            postDate: this.state.postDate,
            postEssay: this.state.postEssay
        }
        //Using POST Method sending to this url, passing NewPost to server. 
        axios.post('http://localhost:4000/api/posts', NewPost)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        event.preventDefault();

        this.setState({
            postName: '',
            postDate: '',
            postEssay: '',
        })
    }

    onChangePostName(event) {
        this.setState({ postName: event.target.value });
    }

    onChangePostDate(event) {
        this.setState({ postDate: event.target.value });

    }

    onChangePostEssay(event) {
        this.setState({ postEssay: event.target.value });

    }
    render() {
        return (
            <div >
                <h1>This is the CreatePost  Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <label >Add Author Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postName}
                            onChange={this.onChangePostName}
                        />

                        <label>Add Post Date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postDate}
                            onChange={this.onChangePostDate}
                        />

                        <label>Add Post Essay: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postEssay}
                            onChange={this.onChangePostEssay}
                        />

                    </div>

                    <div>
                        <input type="submit" value="Add Post" className="btn btn-outline-dark"></input>
                    </div>
                </form>
            </div>
        );
    }
}
