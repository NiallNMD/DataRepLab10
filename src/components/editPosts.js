import React, { Component } from 'react';
import axios from 'axios';

export class EditPosts extends React.Component {
    constructor() {
        super();
        //Needed to handle events or it will fail
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePostName = this.onChangePostName.bind(this);
        this.onChangePostDate = this.onChangePostDate.bind(this);
        this.onChangePostEssay= this.onChangePostEssay.bind(this);

        this.state = {
            postName: '',
            postDate: '',
            postEssay: '',

        }
    }
    //When component is used/shown, this will show/do the function.
    componentDidMount() { 
        console.log(this.props.match.params.id);
        //get id from search bar and put details in fill in Edit
        axios.get('http://localhost:4000/api/posts/' +this.props.match.params.id)
        .then((response)=>{
            this.setState({
                postName: response.data.postName,
                postDate: response.data.postDate,
                postEssay: response.data.postEssay,
                _id: response.data._id
            })
        })
        .catch();
    }
    handleSubmit(event) {
        console.log(this.state.postName);
        console.log(this.state.postDate);
        console.log(this.state.postEssay);
        alert("Post Name: " + this.state.postName + "\nMovie PostDate: " + this.state.postDate + "\nMovie PostPicture: " + this.state.postEssay);

        //Passing information to server
        const NewPost = {
            postName: this.state.postName,
            postDate: this.state.postDate,
            postEssay: this.state.postEssay
        }

        //Interacts with the server.js version of PUT and updates the value thats in the database with what was written in the button.
        axios.put('http://localhost:4000/api/posts/'+ this.state._id, NewPost)
        .then()
        .catch();
        
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
            <div>
                <h1>This is the Edit  Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Edit Author Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postName}
                            onChange={this.onChangePostName}
                        />

                        <label>Edit Post Date: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postDate}
                            onChange={this.onChangePostDate}
                        />

                        <label>Edit Essay: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.postEssay}
                            onChange={this.onChangePostEssay}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Edit Post" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default EditPosts;