import MyGallery from "../gallery";
import Header2 from "../header";
import Footer from "./Header and footer/Footer";
const Gallery = () => {
  return (
    <>
      <Header2 />

      <main>

        <MyGallery />
        <div className="container2">
        <hr/>

          <div className="top-cont">
            <div>
              <img className="items1" src="waypro img.jpg" alt="Image-one" />
            </div>
            <hr/>
            <div>
              <p  className="quote">
                We make it happen how you invisioned, custom edits and
                profetional pictures to bring your memories to life for you to
                keep and feel right at home every time you see them. to bring
                your memories to life for you to keep and feel right at home
                every time you see them.
              </p>
            </div>
          </div>
          
          <hr/>
          <div className="items2">
            <img className="items3" src="weypro first2.jpg" alt="Image-one" />
          </div>
          <hr/>

          <div className="whitespace"></div>
          <p className="quote">
            This is where quotes or statements about serveice and images can go
          </p>
          <hr/>

          <div className="items5">
            <img src="weypro gallery.jpg" alt="Image-one" />
            <img src="weypro gallery2.jpg" alt="Image-one" />
            <img src="weypro gallery3.jpg" alt="Image-one" />
          </div>
          <hr/>

        </div>
      </main>
      <Footer />
    </>
  );
};
export default Gallery;
