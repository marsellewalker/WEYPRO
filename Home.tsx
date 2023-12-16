import { Link } from "react-router-dom";
import Header from "./Header and footer/Header";
import Footer from "./Header and footer/Footer";

const Home = () => {
  return (
    <>
     <Header/>
      
      <main>
        <div className="container">
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
        <nav className="nav-container">
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="About">About</Link>
          </button>
          <button>
            <Link to="Gallery">Gallery</Link>
          </button>
          <button>
            <Link to="Contact">Contact</Link>
          </button>
        </nav>
      </main>
     <Footer/>
    </>
  );
};

export default Home;
