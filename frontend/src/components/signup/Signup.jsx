import React, { useState } from 'react';
import "./signup.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const history = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
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
    await axios.post(`${window.location.origin}/api/auth/register` ,formData)
    .then((response) =>{
      // console.log(response.data);
      if(response.data.message === "Successfully Registered"){
        setFormData({
          email: '',
          username: '',
          password: ''

        })
        alert("Successfully Registered...")
        history("/signin")
      }
      else{
        alert("User Already Exist Please SignIN...")
        history("/signin")
      }
    })
  };

  return (
    <div className="container">
        <div className="signup row d-flex justify-content-center align-items-center">
            <div className="signup-header col-lg-5  d-flex justify-content-center align-items-center">
                <h2>Sign <br /> Up</h2>
            </div>
            <div className="signup-form col-lg-7">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
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
                <button type="submit" className="signup-btn btn btn-primary">Sign Up</button>
            </form>
            </div>
        </div>
      
    </div>
  );
};

export default SignUp;