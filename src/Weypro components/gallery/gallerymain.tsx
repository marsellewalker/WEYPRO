import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from '../../assets/weypro 1.jpg'
import img2 from '../../assets/weypro 2.jpg'
import img3 from '../../assets/weypro 3.jpg'
import img4 from '../../assets/weypro 4.jpg'
import img5 from '../../assets/weypro 5.jpg'
import img6 from '../../assets/weypro 6.jpg'
import img7 from '../../assets/weypro 7.jpg'
import img8 from '../../assets/weypro 8.jpg'
import img9 from '../../assets/weypro 9.jpg'



const MyGallery = () => {
  const images = [
        {
      original: img1,
      thumbnail: img1,
      description: "Image 1 Description",
    },
    {
      original: img2,
      thumbnail: img2,
      description: "Image 2 Description",
    },
    {
      original: img3,
      thumbnail: img3,
      description: "Image 3 Description",
    },
    {
      original: img4,
      thumbnail: img4,
      description: "Image 4 Description",
    },
    {
      original: img5,
      thumbnail: img5,
      description: "Image 5 Description",
    },
    {
      original: img6,
      thumbnail: img6,
      description: "Image 6 Description",
    },
    {
      original: img7,
      thumbnail: img7,
      description: "Image 7 Description",
    },
    {
      original: img8,
      thumbnail: img8,
      description: "Image 8 Description",
    },
    {
      original: img9,
      thumbnail: img9,
      description: "Image 9 Description",
    },
    // Add more images as needed
  ];

  return (
    <div className="gallery-slide">

      <Gallery autoPlay items={images} />
    </div>
  );
};

export default MyGallery;
