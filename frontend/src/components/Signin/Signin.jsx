import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import "./signin.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store';

const SignIn = () => {
  const history = useNavigate();
  const dispactch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    await axios.post(`${window.location.origin}/api/auth/signin` ,formData)
    .then((response) =>{
      const msg = response.data.message;
      if(msg === "Please Sign Up"){
        toast.error("Wrong Username or Password...");
      }
      else if(msg === "Incorect Password"){
        toast.error("Incorect Password...");
      }
      else if(msg === "SignIn Successful"){
        const userId = response.data.others._id
        if (userId) {
          sessionStorage.setItem("id", userId);
          sessionStorage.setItem("username", response.data.others.username);
          // console.log(userId);
          dispactch(authAction.login())
          alert("SignIn Successful...");
          history("/ideas");
        } else {
          console.error("User ID is not defined in the response.");
          toast.error("There is some problem in SignIn");
        }
      }
      else{
        toast.error("There is some problem in SignIn")
      }
    })
  };

  return (
    <div className="container">
      <ToastContainer autoClose={2000} hideProgressBar={true}/>
        <div className="signin row d-flex justify-content-center align-items-center">
            <div className="signin-header col-lg-5  d-flex justify-content-center align-items-center">
                <h2>Sign <br /> In</h2>
            </div>
            <div className="signin-form col-lg-7">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username..."
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit" className="signin-btn btn btn-primary">Sign In</button>
            </form>
            </div>
        </div>
      
    </div>
  );
};

export default SignIn;
