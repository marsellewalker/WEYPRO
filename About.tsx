import Header from "./Header and footer/Header";
import Footer from "./Header and footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="textandImageBox">
            <div className="textItem">
              <h1 className="aboutMeFont">About Me</h1>

              <p>
                I'm Josh Smith. I have been doing photography and videography
                for fifteen years now.
                <br /> I take photos and video for any event you have. I have
                done music videos, weddings and more.
              </p>
            </div>
            <img
              className="aboutMeImage"
              src="weypro himsef.jpg"
              alt="WeyPro About me Image"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
