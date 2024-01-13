import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Weypro components/Home";
import About from "./Weypro components/About";
import Gallery from "./Weypro components/Gallery";
import Contact from "./Weypro components/Contact";

function App() {
  return (
    <>
      <Router>
        <switch>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="About" Component={About} />
            <Route path="Gallery" Component={Gallery} />
            <Route path="Contact" Component={Contact} />
          </Routes>
        </switch>
      </Router>
    </>
  );
}

export default App;
