import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const MyGallery = () => {
  const images = [
        {
      original: "weypro 1.jpg",
      thumbnail: "weypro 1.jpg",
      description: "Image 1 Description",
    },
    {
      original: "weypro 2.jpg",
      thumbnail: "weypro 2.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 3.jpg",
      thumbnail: "weypro 3.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 4.jpg",
      thumbnail: "weypro 4.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 5.jpg",
      thumbnail: "weypro 5.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 6.jpg",
      thumbnail: "weypro 6.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 7.jpg",
      thumbnail: "weypro 7.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 8.jpg",
      thumbnail: "weypro 8.jpg",
      description: "Image 2 Description",
    },
    {
      original: "weypro 9.jpg",
      thumbnail: "weypro 9.jpg",
      description: "Image 2 Description",
    },
    // Add more images as needed
  ];

  return (
    <div className="gallery-slide">
        <h1> Gallery</h1>

      <Gallery items={images} />
    </div>
  );
};

export default MyGallery;
