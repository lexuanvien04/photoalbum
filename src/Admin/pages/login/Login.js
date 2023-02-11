import React, { useState } from 'react';
import './Login.css';
import axios, { AxiosHeaders } from 'axios';
import { DetailBusiness } from '../../Api/Business';

const Login = () => {

  let data = {
        email: "admin@sdc.udn.vn",
        password: "123123123"
        };

    const btnLogin = () =>{
       axios.post('https://photo.azurecloud.vn/api/v1/login', 
       data).then(result =>{
        if(result.status == 200){
                let data = result.data.data;
                console.log(data);
                localStorage.setItem('token', data.access_token);
                window.location.href = "/admin/dashboard"
        }else{
            console.log('Tài khoản hoặc mật khẩu sai');
            window.alert("Tài khoản hoặc mật khẩu sai")
        }
       
       })

    }
    const btnShow = () =>{
        let token = localStorage.getItem('token');
        console.log(token);
    }
    const btnGetUser = ()=>{
      DetailBusiness(506).then(data=>{
          console.log(data);
      })
  }
  const btnLogout = () =>{
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  return(
    <div className="login-wrapper">
      
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button  type="submit" className="btn btn-primary" onClick={btnLogin} >
            Submit
          </button>

          <button onClick={btnShow} type="submit" className="btn btn-primary">
            show token
          </button>

          <button onClick={btnGetUser} type="submit" className="btn btn-primary">
            Lấy người dùng
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      
    </div>
  )
}

export default Login;