import React from "react"
import './Navbar.css'
import logo from '../../assets/activity.png'
import { useState } from 'react';

const Navbar = () => {
    const [formvalue, setFormvalue]= useState({test: '' });
    const handleInput =(e)=>{
        const { name, value}= e.target;
        setFormvalue({...formvalue, [name]:value});
        // console.log(formvalue);
      }
      const handleFormsubmit= async (e)=>{
        e.preventDefault();
        console.log(formvalue)
      }
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/> 
            <ul>
                <li>asd</li>
                <li>Home</li>
                <li>Review</li>
                <li>Login</li>
                <form onSubmit={ handleFormsubmit}>
                    <input  type="text" name='test' value={formvalue.test } onChange={ handleInput}  className='form-control'  placeholder='test...' />
                    <button className='form-control btn btn-success '>Submit</button>
                </form>
                
            </ul>
        </div>
    )
}

export default Navbar