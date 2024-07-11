import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
          {/* Navbar para telas maiores */}
          <nav className={`container-fluid ${styles.area} d-none d-md-block`}>
            <ul className={`row row-cols-md-1 ${styles.links_list}`}>
              <li className='col-3'>
                <NavLink to="/Register">Register</NavLink>
              </li>
              <li className='col-3'>
                <NavLink to="/">Workouts</NavLink>  
              </li>
              <li className='col-3'>
                <NavLink to="/Resume">Resume</NavLink>
              </li>
            </ul>
          </nav>
    
          {/* Navbar do Bootstrap para telas menores */}
          <nav className={`navbar navbar-expand-lg ${styles.area2} d-md-none`}>
            <div className="container-fluid">
              <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`"navbar-nav" ${styles.links_list2}`}>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Workouts">Workouts</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Resume">Resume</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );

};

export default Navbar;