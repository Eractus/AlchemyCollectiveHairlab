import React from "react";
import { Link } from "react-router-dom";

const GalleryPhoto = props => {
  console.log(props.photo);
  return (
    <li className="gallery-photo-item-container">
      <div>
        <Link to={`/`}>
          <img className="gallery-photo-image" src={props.photo} />
        </Link>
      </div>
    </li>
  );
};

export default GalleryPhoto;
