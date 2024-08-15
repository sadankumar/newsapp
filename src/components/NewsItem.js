import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title = "No Title", description = "No Description", imageurl, newsurl = "#" } = this.props;
    return (
      <div className="my-2">
        <div className="card">
          <img src={imageurl || "default-image-url.jpg"} className="card-img-top" alt={title || "News image"} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
