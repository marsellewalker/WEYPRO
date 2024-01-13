import Footer from "./Header and footer/Footer";
import Header2 from "../header";

const Home = () => {
  return (
    <>
      <Header2 />
      <main>
        <div className="container">
          <div className="cover_pic">
          </div>
          <div className="name_n_motto">
          <h1>
            W<span>E</span>YPRO
          </h1>
          <h2>
            Making it Happen <hr />
          </h2>
          <h3>
            Photography & videography <hr />
          </h3>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default Home;
