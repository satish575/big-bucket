import React from 'react'
import { Link } from 'react-router-dom';
import Styled from "styled-components"

const LoginWrapper=Styled.div`
    width:100vw;
    height:100vh;
    background-color:#F4F3EF;  
    display:flex;
    align-items:center;
    justify-content:center;

    .login-container{
        width:50vw;
        height:60vh;
        background-color:white;
        box-shadow:2px 2px 10px gray;
        display:flex;
    }
    .image{
        width:50%;
        height:100%;
    }
    .image img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    .login-form{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;

        h1{
            font-family:"Poppins";
        }
    }
    .login-form .login-field{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;

        #username{
            outline:none;
            border:none;
            border-bottom:1px solid gray;
            font-size:20px;
        }
        #password{
            outline:none;
            border:none;
            border-bottom:1px solid gray;
            font-size:20px;
        }
        button{
            outline:none;
            border:none;
            padding:10px 20px;
            background-color:#FF561E;
            color:white;
            border-radius:20px;
            font-size:20px;
            cursor:pointer;
        }

    }
    .signup-message a{
        text-decoration:none;
        background-color:#FF561E;
        color:white;
        padding:5px 10px;
        border-radius:15px;
    }
`;
function Login() {
  return (
     <LoginWrapper>
        <div className="login-container">
            <div className="image">
                <img src="hero.png" alt="" />
            </div>
            <div className="login-form">
                <h1>Login to continue</h1>
                <div className="login-field">
                 <input type="text" name="username" id="username" placeholder='Username'/><br/>
                 <input type="password" name='passowrd' id='password' placeholder='Password' /><br/>
                 <button>Login</button>
                 </div>
                 <div className="signup-message">
                    <p>Don't have an account ? <Link to={'/signup'}>Signup</Link></p>
                 </div>
            </div>
        </div>
     </LoginWrapper>
  )
}

export default Login