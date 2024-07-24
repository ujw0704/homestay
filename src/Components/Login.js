import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      // Add validation logic here if needed
    }
    console.log("form is submitted", formData);
  };

  return (
    <div className="Login-container">
      <form onSubmit={handleSubmit}>
        <div className="glass-effect">
          <div className="input-group">
            <input
              className="Logininput"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label className="placeholder">Username</label>
          </div>
          <div className="input-group">
            <input
              className="Logininput"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label className="placeholder">Password</label>
            <span className="toggle" onClick={togglePasswordVisibility}>
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <div>
            <button className="login-button" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
