import React, { Component } from "react";
import Comment from "../components/Comment/Comment";
import Post from "../components/Post/Post";
class SinglePostPage extends Component {
  render() {
    return (
      <div>
        <p className="SinglePostPage">Single Post Page</p>
        <Post />
        
      </div>
    );
  }
}

export default SinglePostPage;
