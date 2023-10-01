import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">BonsApp</h3>
                <span className="logindesc">Lorem ipsum dolor sit am</span>
            </div>
            <div className="loginright">
                <div className="loginpagebox">
                    <input placeholder='Email' type="text" className="logininput" />
                    <input placeholder='Password' type="password" className="logininput" />
                    <button className="loginbutton">Login</button>
                    <span className="loginforget">Forget password</span>
                    <button className="registerlogin">Create new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
