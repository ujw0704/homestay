import React, { useState } from 'react';
import "./Register.css"
import da from "./darjeeling/da.mp4"
 import va from "./darjeeling/clip.mp4"
 import ne from "./darjeeling/new.mp4"

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        number: "",
        password: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className='register-Container'>
            <div className='video'>
                <iframe width="250px" height="400" src={va} alt="va"></iframe>
                <iframe width="250px" height="400" src={da} alt="da"></iframe>
                <iframe width="250px" height="400" src={ne} alt="ne"></iframe>
            </div>
            <div className='register'>
                <div className='Register-input'>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        required
                        onChange={handleChange}
                    />
                    <label>Name</label>
                </div>
                <div className='Register-input'>
                    <input
                        type='text'
                        name='username'
                        value={formData.username}
                        required
                        onChange={handleChange}
                    />
                    <label>Username</label>
                </div>
                <div className='Register-input'>
                    <input
                        type='number'
                        name='number'
                        value={formData.number}
                        required
                        onChange={handleChange}
                    />
                    <label>Phone Number</label>
                </div>
                <div className='Register-input'>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        required
                        onChange={handleChange}
                    />
                    <label>Password</label>
                </div>
        <button className='register-button' type='submit'>Register</button>
            </div>
        </div>
    </form>
    
    );
}

export default Register;
