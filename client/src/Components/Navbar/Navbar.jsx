import React from "react"
import './Navbar.css'
import logo from '../../assets/activity.png'
import { useState } from 'react';

const Navbar = () => {
    const [formvalue, setFormvalue]= useState({search: '' , location: ''});
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
                <li>gas</li>
                <li>Home</li>
                <li>Review</li>
                <li>Login</li>
                <form onSubmit={ handleFormsubmit}>
                    <input  type="text" name='search'  value={formvalue.search } onChange={ handleInput}  className='form-control'  placeholder='Things to do, Activities' />
                    <input  type="text" name='location' value={formvalue.location } onChange={ handleInput}  className='form-control'  placeholder='Address, Neighborhood' />
                    <button className='form-control btn btn-success '>Submit</button>
                </form>
                
            </ul>
        </div>
    )
}

export default Navbar