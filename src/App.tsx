import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Weypro components/home/Home";
import About from "./Weypro components/About/About";
import Gallery from "./Weypro components/gallery/Gallery";
import Contact from "./Weypro components/Contact Form/Contact";
import Header2 from "./Weypro components/Header and footer/header";
import Footer from "./Weypro components/Header and footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header2 />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="About" Component={About} />
          <Route path="Gallery" Component={Gallery} />
          <Route path="Contact" Component={Contact} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
