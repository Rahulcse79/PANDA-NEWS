import React, { Component } from "react";

export class Card extends Component {
  render() {
    let {title, Description, imageurl, ReadMore, date, author, source} = this.props;
    return (
      <>
      <div className="container my-3">
        <div className="card">
          <img src={imageurl}className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "80%"}}>
    {source?source:"Self"}
    <span className="visually-hidden">unread messages</span>
  </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {Description}
              <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            </p>
            <a href={ReadMore} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Card;
