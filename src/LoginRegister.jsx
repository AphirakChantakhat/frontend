import React, { useState } from "react";
<<<<<<< HEAD
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
=======
//import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./style.scss";

function LoginRegister() {
    function SwitchContent(){
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

<<<<<<< HEAD
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
=======
        registerBtn.addEventListener('click', () =>{
            content.classList.add("active")
        });
        loginBtn.addEventListener('click', () =>{
            content.classList.remove("active")
        });
    }

    {/*----------Register */}
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const navigate = useNavigate()

    function register(event){
        event.preventDefault();
        axios.post("http://localhost:8081/register", {username, email, password})
        .then(res => {
            console.log(res);
            navigate('/home');
        }).catch(err=>console.log(err))
    }
    {/*----------Login */}
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    function login(event){
        event.preventDefault();
        axios.post("http://localhost:8081/login", values)
        .then(res => {
            if(res.data.Status === "Success"){
                console.log(res);
                navigate('/home');
            }else
                alert(res.data.Error)
        }).catch(err => console.log(err));
    }
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8

    return (
        <div className="content justify-content-center align-items-center d-flex show-lg" id="content">
            {/*----Register form--------*/}
            <div className="col-md-6 d-flex justify-content-center left-box">
<<<<<<< HEAD
                <form onSubmit={handleRegister}>
=======
                <form onSubmit={register}>
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
                    <div className="header-text mb-4">
                        <h1>Create Account</h1>
                    </div>
                    <div className="input-group mb-3">
<<<<<<< HEAD
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
=======
                        <input type="text" placeholder="Name" className="form-control form-control-lg bg-light fs-6" onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" placeholder="Password" className="form-control form-control-lg bg-light fs-6" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-white text-white w-50 fs-6">REGISTER</button>
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
                    </div>
                </form>
            </div>

            {/*----Login form--------*/}
            <div className="col-md-6 right-box">
<<<<<<< HEAD
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
=======
                <form onSubmit={login}>
                    <div className="header-text mb-4">
                        <h1>Sign In</h1>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" placeholder="Email" className="form-control form-control-lg bg-light fs-6"
                            onChange={e=>setValues({...values,email:e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" placeholder="Password" className="form-control form-control-lg bg-light fs-6"
                            onChange={e=>setValues({...values,password:e.target.value})}/>
                    </div>
                    <div className="input-group mb-3 justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label htmlFor="formcheck" className="form-check-lable text-secondary"><small>Remember me</small></label>
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
                        </div>
                        <div className="forgot">
                            <small><a href='#'>Forgot password?</a></small>
                        </div>
                    </div>
                    <div className="input-group mb-3 justify-content-center">
<<<<<<< HEAD
                        <button className="btn w-50 fs-6">LOGIN</button>
=======
                        <button className="btn border-white text-white w-50 fs-6">LOGIN</button>
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
                    </div>
                </form>
            </div>

<<<<<<< HEAD
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
=======
            {/*-------------swutch panel--------------*/}
            <div className="switch-content">
                <div className="switch">
                    <div className="switch-panel switch-left">
                        <h1>Hello, Again</h1>
                        <p>We are happy to see you back</p>
                        <button className="hidden btn border-white text-white w-50 fs-6" id='login' onClick={SwitchContent}>Login</button>
                    </div>
                    <div className="switch-panel switch-right">
                        <h1>Welcome</h1>
                        <p>Join Our Unique Platfrom, Explore a New Experience</p>
                        <button className="hidden btn border-white text-white w-50 fs-6" id='register' onClick={SwitchContent}>Register</button>
                    </div>
                </div>
                
            </div>

>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
        </div>
    );
}

export default LoginRegister;
