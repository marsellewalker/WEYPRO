import Header from "./Header and footer/Header";
import Footer from "./Header and footer/Footer";
const Gallery = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h1> Gallery</h1>
          <div className="imageContainer">
            <img className="items" src="waypro img.jpg" alt="Image-one" />
            <img className="items" src="weypro first.jpg" alt="Image-two" />
            <img className="items" src="weypro gallery.jpg" alt="Image-three" />
            <img className="items" src="weypro gallery2.jpg" alt="Image-four" />
            <img className="items" src="weypro gallery3.jpg" alt="Image-five" />
            <img className="items" src="weypro himsef.jpg" alt="Image-six" />
            <img className="items" src="weypro sitting.jpg" alt="Image-seven" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Gallery;
