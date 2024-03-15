import React from "react"
import './Navbar.css'
import logo from '../../assets/activity.png'
import { useState } from 'react';
import { Flex } from "@chakra-ui/react";
import Places from "../Places/Places";

const Navbar = () => {
    const [formvalue, setFormvalue]= useState({search: '' , location: ''});
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleInput =(e)=>{
        const { name, value}= e.target;
        setFormvalue({...formvalue, [name]:value});
        // console.log(formvalue);
      }
      const handleFormsubmit= async (e)=>{
        e.preventDefault();
        // console.log(formvalue)

        await fetch("/search",{ //send to server params
            method: "POST",
            body:JSON.stringify(formvalue),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }).then(   //getting response from server
            (response)=>response.json()
        ).then((reponseData)=>{
            console.log(reponseData.places)
            setData(reponseData.places) //.places is the array 
            
            setIsLoading(false)
            // console.log(JSON.parse(response.json()))
            // console.log(data["places"])
        }
        )
      }
    return (
        <Flex
        position={"absolute"}
        top={0}
        left={0}
        width={'100vw'}
        zIndex={9999}>
            <div className="navbar">
            <img src={logo} alt="" className="logo"/> 
            <ul>
                <li>Home</li>
                <li>Review</li>
                <li>Login</li>
                <form onSubmit={ handleFormsubmit}>
                    <input  type="text" name='search' value={formvalue.search } onChange={ handleInput}  className='form-control'  placeholder='Activity' />
                    <input  type="text" name='location' value={formvalue.location } onChange={ handleInput}  className='form-control'  placeholder='Address, Neighborhood' />
                    <button className='form-control btn btn-success '>Submit</button>
                </form>
             </ul>
        <Places places = { data } isLoading={isLoading}/>

         </div>

        </Flex>
        // <div className="navbar">
        //     <img src={logo} alt="" className="logo"/> 
        //     <ul>
        //         <li>asd</li>
        //         <li>Home</li>
        //         <li>Review</li>
        //         <li>Login</li>
        //         <form onSubmit={ handleFormsubmit}>
        //             <input  type="text" name='search' value={formvalue.search } onChange={ handleInput}  className='form-control'  placeholder='Activity' />
        //             <input  type="text" name='location' value={formvalue.location } onChange={ handleInput}  className='form-control'  placeholder='Address, Neighborhood' />
        //             <button className='form-control btn btn-success '>Submit</button>
        //         </form>
                
        //      </ul>
        //  </div>
    )
}

export default Navbar