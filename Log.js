import React from 'react'
import './Log.css'
import logo from './images/v60_3.png'
import { Link } from 'react-router-dom'

export const Log = () => {
  return (
    <div>
   <div class="logo">
    <img src={logo} style={{  width: "100px",height:"100px"}}/>
   </div>
   <div class="box">
    <div class="container">

        <div class="top">
            <span>Have an account?</span>
            <header>Login</header>
        </div>

        <div class="input-field">
            <input type="text" class="input" placeholder="Username" id=""/>
            <i class='bx bx-user' ></i>
        </div>
        <br/>
        <div class="input-field">
            <input type="Password" class="input" placeholder="Password" id=""/>
            <i class='bx bx-lock-alt'></i>
        </div>
        <br/>

        <div class="input-field">
            <Link to='/home'>
            <input type="submit" class="submit" value="Login" id=""/>
            </Link>
        </div>
        <br/>
        <div class="two-col">
            <div class="one">
               <input type="checkbox" name="" id="check"/>
               <label for="check"> Remember Me</label>
            </div>
            
        </div>
    </div>
</div> 
</div> 
        
    
  )
}

export default Log;
