import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <p className="HomePage">
        Home Page
        {
          <table className="table HighScores-table text-info">
            <thead>
              <tr>
                <th width={80}>Votes</th>
                <th width={100}>Title</th>
                <th width={100}>Img</th>
                <th width={100}>See This Post</th>
              </tr>
            </thead>
            <tbody>
              <tr key="0">
                <td>
                  <span className="badge"> {this.props.posts.votes} </span>
                </td>
                <td>{this.props.posts.title}</td>
                <td>
                  <img src={this.props.posts.thumbnail_image_url} />
                </td>
                <td>
                  <div>
                    <Link
                      className="HighScores-cancel btn btn-default btn-sm"
                      to="/posts/0"
                      style={{ marginTop: 40 }}
                    >
                      See This Post
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        }
      </p>
    );
  }
}

export default HomePage;
