import React from 'react'
import logo from './images/v60_3.png'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div>
    <div class="logo">
     <img src={logo} style={{  width: "100px",height:"100px"}}/>
    </div>
    <div class="box">
     <div class="container">
 
         <div class="top">
             
             <header>Sign up   </header>
         </div>
 
         <div class="input-field">
             <input type="text" class="input" placeholder="Username" id=""/>
             <i class='bx bx-user' ></i>
         </div>
         <br/>
         <div class="input-field">
             <input type="Email" class="input" placeholder="Email" id=""/>
             <i class='bx bx-lock-alt'></i>
         </div>
         <br/>
         <div class="input-field">
             <input type="Password" class="input" placeholder="Password" id=""/>
             <i class='bx bx-lock-alt'></i>
         </div>
         <br/>
 
         <div class="input-field">
             <Link to='/home'>
             <input type="submit" class="submit" value="Sign up" id=""/>
             </Link>
         </div>
         <br/>
         <div class="two-col">
            <span></span>
            <div class="two">
                <p>Already have an account?   <Link to={'./Log'}>Login</Link></p>
            </div>
        </div>
     </div>
 </div> 
 </div> 
  )
}

export default Signup;