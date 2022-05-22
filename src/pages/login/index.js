import React from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// style import 
import '../../styles/login.css';


export default function LoginPage() {
  return (
    <div className='login-container'>
        <form>
            <center><AiOutlineUser size={90} color='#d3d3d3'/></center>
            <h3 style={{textAlign: 'center'}}>sign in to continue</h3>
            <section>
                <span> <AiOutlineUser size={24}/></span>
                <input placeholder='Student number' required/>
            </section>
            <section>
                <span> <AiOutlineLock size={24}/></span>
                <input type={'password'} placeholder='Password' required/>
            </section>
            <section>
                <button type={'submit'} >Submit</button>
            </section>
            <a href='#forgot-account'>forgotten password?</a>
            <div className='a'>Not a member? <Link to='/register'>Create Account</Link></div>
        </form>
    </div>
  )
}
