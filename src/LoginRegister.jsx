import React, { useState } from "react";
//import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import "./style.scss";

function LoginRegister() {
    function SwitchContent(){
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

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

    return (
        <div className="content justify-content-center align-items-center d-flex show-lg" id="content">
            {/*----Register form--------*/}
            <div className="col-md-6 d-flex justify-content-center left-box">
                <form onSubmit={register}>
                    <div className="header-text mb-4">
                        <h1>Create Account</h1>
                    </div>
                    <div className="input-group mb-3">
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
                    </div>
                </form>
            </div>

            {/*----Login form--------*/}
            <div className="col-md-6 right-box">
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
                        </div>
                        <div className="forgot">
                            <small><a href='#'>Forgot password?</a></small>
                        </div>
                    </div>
                    <div className="input-group mb-3 justify-content-center">
                        <button className="btn border-white text-white w-50 fs-6">LOGIN</button>
                    </div>
                </form>
            </div>

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

        </div>
    );
}

export default LoginRegister;
