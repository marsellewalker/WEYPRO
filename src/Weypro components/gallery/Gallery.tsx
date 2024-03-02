import MyGallery from "./gallerymain";


const Gallery = () => {
  return (
    <>

      <main>
        <MyGallery />
        <div className="container2">

          <div className="top-cont">
            <div className="items1">
            </div>
            <div>
              <p className="quote">
                We make it happen how you invisioned, custom edits and
                profetional pictures to bring your memories to life for you to
                keep and feel right at home every time you see them. to bring
                your memories to life for you to keep and feel right at home
                every time you see them.
              </p>
            </div>
          </div>

         

          <div className="whitespace"></div>
          

          <div className="items5">
            <img src="weypro gallery.jpg" alt="Image-one" />
            <img src="weypro gallery2.jpg" alt="Image-two" />
            <img src="weypro gallery3.jpg" alt="Image-three" />
            <p className="quote">
            This is where quotes or statements about serveice and images can go
          </p>
          </div>

         
        </div>
      </main>
    </>
  );
};
export default Gallery;
