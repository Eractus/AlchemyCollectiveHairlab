import React from "react";
import { Link } from "react-router-dom";

class GalleryPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayPhoto: false }

    this.openPhotoPopup = this.openPhotoPopup.bind(this);
    this.closePhotoPopup = this.closePhotoPopup.bind(this);
  }

  openPhotoPopup() {
    this.setState({ displayPhoto: true });
  }

  closePhotoPopup() {
    this.setState({ displayPhoto: false });
  }

  render() {
    const photoPopup = (this.state.displayPhoto) ?
    <div className="modal-overlay">
      <div className="photo-image-popup">
        <img src={this.props.photo} />
        <span onClick={this.closePhotoPopup}></span>
      </div>
    </div> : "";

    return (
      <li className="gallery-photo-item-container">
        {photoPopup}
        <div>
          <span>
            <img onClick={this.openPhotoPopup} className="gallery-photo-image" src={this.props.photo} />
          </span>
        </div>
      </li>
    );
  }
}

export default GalleryPhoto;
