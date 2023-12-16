import { Link } from "react-router-dom"

const Header= ()=>
{
   
        return(
    
        <header>
        <div className="topbar">
          <h3 className="h3-2">
            W<span>E</span>YPRO
          </h3>
          <nav className="nav2">
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/About">About</Link>
            </button>
            <button>
              <Link to="/Gallery">Gallery</Link>
            </button>
            <button>
              <Link to="/Contact">Contact</Link>
            </button>
            <hr />
            <input
              className="search-bar"
              type="text"
              placeholder="Search Site..."
            ></input>
          </nav>
        </div>
      </header>
      
        )
    
}

    export default Header