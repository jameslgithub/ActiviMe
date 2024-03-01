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
        let x = formvalue
        
        await fetch("/search",{
            method: "POST",
            body:JSON.stringify(formvalue),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }).then(    //will send get request to server with query in url
            (response)=>{
            //console.log(JSON.parse(response.json()))
            console.log(response.body)
            
        }
        )

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
                    <input  type="text" name='search' value={formvalue.search } onChange={ handleInput}  className='form-control'  placeholder='Activity' />
                    <input  type="text" name='location' value={formvalue.location } onChange={ handleInput}  className='form-control'  placeholder='Address, Neighborhood' />
                    <button className='form-control btn btn-success '>Submit</button>
                </form>
                
            </ul>
        </div>
    )
}

export default Navbar