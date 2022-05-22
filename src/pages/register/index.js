import React from 'react';
import { AiOutlineBook, AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// style import 
import '../../styles/login.css';


export default function RegisterPage() {
  return (
    <div className='login-container'>
        <form>
            <center><AiOutlineUser size={90} color='#d3d3d3'/></center>
            <h3 style={{textAlign: 'center'}}>Create Account</h3>
            <section>
                <span> <AiOutlineUser size={24}/></span>
                <input placeholder='Student name' required/>
            </section>
            <section>
                <span> <AiOutlineMail size={24}/></span>
                <input type={'email'} placeholder='Student email' required/>
            </section>
            <section>
                <span> <AiOutlineBook size={24}/></span>
                <input type={'text'} placeholder='Course of study' required/>
            </section>
            <section>
                <span> <AiOutlineLock size={24}/></span>
                <input type={'password'} placeholder='Password' required/>
            </section>
            <section>
                <button type={'submit'} >Continue</button>
            </section>
            <a href='#forgot-account'>forgotten password?</a>
            <div className='a'>Already a member? <Link to='/login'>Login</Link></div>
            <br/>
        </form>
    </div>
  )
}
