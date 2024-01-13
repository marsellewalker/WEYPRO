import Header2 from "../header";
import Footer from "./Header and footer/Footer";

const About = () => {
  return (
    <>
      <Header2 />
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
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
