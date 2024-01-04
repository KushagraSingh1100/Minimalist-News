import React from "react";

function Newscard(props) {
  return (
    <>
      <div className="card my-2" style={{ width: "18rem" }}>
        <img
          src={
            props.imgUrl === null
              ? "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
              : props.imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.newsUrl} target="_main" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Newscard;
