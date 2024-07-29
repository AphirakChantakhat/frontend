import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./style.scss";
import ImgLogo from "./image/logo4_green01.png";
import Swal from 'sweetalert2';

function LoginRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    function SwitchContent() {
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            content.classList.add("active");
        });
        loginBtn.addEventListener('click', () => {
            content.classList.remove("active");
        });
    }

    const handleRegister = async (event) => {
        event.preventDefault();
    
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email is required'
            });
            return;
        }
    
        try {
            console.log("Sending data:", { username, email, password });
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
    
            console.log("Response status:", response.status);
            const data = await response.json();
    
            console.log("Response data:", data);
    
            if (data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.error
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Registration successful'
                });
                navigate('/LoginRegister');
            }
        } catch (error) {
            console.error("Error occurred:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred'
            });
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/login", values);
            if (response.data.Status === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Login success'
                })
                navigate('/Dashbord');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.Error
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred'
            });
        }
    };

    return (
        <div className="content justify-content-center align-items-center d-flex show-lg" id="content">
            {/*----Register form--------*/}
            <div className="col-md-6 d-flex justify-content-center left-box">
                <form onSubmit={handleRegister}>
                    <div className="header-text mb-4">
                        <h1>Create Account</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control form-control-lg bg-light fs-6"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control form-control-lg bg-light fs-6"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control form-control-lg bg-light fs-6"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn w-50 fs-6">REGISTER</button>
                    </div>
                </form>
            </div>

            {/*----Login form--------*/}
            <div className="col-md-6 right-box">
                <form onSubmit={handleLogin}>
                    <div className="header-text mb-4">
                        <h1>LogIn</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control form-control-lg fs-6"
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control fs-6"
                            onChange={e => setValues({ ...values, password: e.target.value })}
                        />
                    </div>
                    <div className="input-group mb-3 justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label htmlFor="formcheck" className="form-check-label text-white text-secondary"><small>Remember me</small></label>
                        </div>
                        <div className="forgot">
                            <small><a href='#'>Forgot password?</a></small>
                        </div>
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn w-50 fs-6">LOGIN</button>
                    </div>
                </form>
            </div>

            {/*-------------switch panel--------------*/}
            <div className="switch-content">
                <div className="switch">
                    <div className="switch-panel switch-left">
                        <img src={ImgLogo} className="App-logo" alt="logo" />
                        <p>สามารถเข้าสู่ระบบได้ที่นี่</p>
                        <button className="hidden btn text-white w-50 fs-6" id='login' onClick={SwitchContent}>Login</button>
                    </div>
                    <div className="switch-panel switch-right">
                        <img src={ImgLogo} className="App-logo" alt="logo" />
                        <p>หากยังไม่ได้ลงทำเบียน สามารถสมัครสมาชิกได้ที่นี่</p>
                        <button className="hidden btn text-white w-50 fs-6" id='register' onClick={SwitchContent}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
