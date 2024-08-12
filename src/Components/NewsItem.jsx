import React from "react";
// The purpose of using this is that If some cards dont have the image then they can Use it.
import Image from "../assets/download.jpeg";
function NewsItem({ title, description, src, url }) {
  return (
    /*We will be using card component here.Used from Bootstrap And Now editing it.*
      /* And also remember that in return we give styling in double curly braces.*/
    <div
      className="card bg-dark text-light mb-3 d-inline-block  m-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : Image}
        style={{ height: "200px", width: "345px" }}
        className="card-img-top"
        alt="This is image"
      />
      <div className="card-body">
        {/* Here we will inject Javascript .....to know that igf title exists or not If it exists then return only content till the index given */}
        <h5 className="card-title">{title ? title.slice(0, 50) : ""}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "It is about the information thata has just happend."}
        </p>
        {/* Here using the  */}
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
export default NewsItem;
