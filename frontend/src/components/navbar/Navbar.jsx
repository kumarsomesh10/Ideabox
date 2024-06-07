import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "./navbar.css"
import { GiBookmarklet } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store';

const Navbar = () => {
  // const notify = () => toast.info("Please SignUp/SignIn");
  const dispactch = useDispatch()
  const isLogedIn =  useSelector((state)=> state.isLogedIn)
  console.log(isLogedIn);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand ideabook" to="/"> <GiBookmarklet /> IdeaBox</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 d-flex justify-content-center align-items-center">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2 d-flex justify-content-center align-items-center">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item mx-2 d-flex justify-content-center align-items-center">
              <Link className="nav-link active" aria-current="page" to="/ideas">Idea</Link>
              {/* <Link onClick={notify}  className="nav-link active" aria-current="page" >Idea</Link> */}
              {/* <ToastContainer /> */}
            </li>
            {isLogedIn ?
            <>
              <li onClick={() => {dispactch(authAction.logout())}} className="nav-item mx-2 nav-btn d-flex justify-content-center align-items-center">
              <Link  className="nav-link active" aria-current="page" to="./">Log Out</Link>
              </li>
              <li className="nav-item mx-2 nav-icon d-flex justify-content-center align-items-center">
                <Link className="nav-link active" aria-current="page" to="/">
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" alt="user" />
                </Link>
              </li>
            </>
            :
            <>
              <li className="nav-item mx-2 nav-btn d-flex justify-content-center align-items-center">
              <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item mx-2 nav-btn d-flex justify-content-center align-items-center">
                <Link className="nav-link active" aria-current="page" to="/signin">Sign In</Link>
              </li>
            </>
          }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
