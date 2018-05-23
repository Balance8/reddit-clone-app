import React, { Component } from "react";
import "./Post.css";
import Comment from "../Comment/Comment";

class TextPost extends Component {
  render() {
    return (
      <div className="TextPost">
        <p className="TextPost-content">TextPost content</p>
        <Comment />
      </div>
    );
  }
}

export default TextPost;
