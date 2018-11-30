import React from "react";
import { Link } from "react-router-dom";
import GalleryPhoto from "../galleryPhoto/galleryPhoto";

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const photoURLs = [
      "./app/assets/images/splash1.jpg",
      "./app/assets/images/splash2.jpg",
      "./app/assets/images/splash3.jpg",
      "./app/assets/images/splash4.jpg",
      "./app/assets/images/splash6.jpg",
      "./app/assets/images/splash5.jpg",
      "./app/assets/images/splash8.jpg",
      "./app/assets/images/splash9.jpg",
    ];

    const photos = [];

    photoURLs.forEach(photoURL => {
      photos.push(
        <GalleryPhoto
          photo={photoURL}
        />
      )
    });

    return (
      <div className="gallery-container">
        <header className="header darken-overlay">
          <p>GALLERY</p>
        </header>
        <main>
          <ul className="gallery-photos-list">
            {photos}
          </ul>
        </main>
      </div>
    )
  }
}

export default Gallery;
