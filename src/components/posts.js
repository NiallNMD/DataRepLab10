import React from 'react';
import { PostItem } from './postItem';

export class Posts extends React.Component {
    render() {
       return this.props.posts.map((post)=>
       {
           return <PostItem post={post} ReloadData ={this.props.ReloadData}></PostItem>
       });
    }
}
