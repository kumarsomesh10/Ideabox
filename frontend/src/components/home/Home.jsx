import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const isLogedIn =  useSelector((state)=> state.isLogedIn)
  console.log(isLogedIn);
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container">
        <h1>Ideabox <br />Where Ideas Take Flight</h1>
        <p>Join the community{isLogedIn ?<>,</> : <>, SignUp,</>} and securely store your unique ideas for the future.
        </p>
        {isLogedIn ? null : 
          <div className='home-btn d-flex justify-content-center align-items-center'>
            <Link  className="nav-link " aria-current="page" to="/signup">Sign Up</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Home