import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <nav className='w-100 d-flex justify-content-around align-items-center' style={{height:"50px",background:"orange",fontSize:"25px"}}>
            <Link to="/home">Home</Link>
            <Link to="/home/about">About</Link>
            <Link to="/home/contact">Contact</Link>
            <Link to="/home/help">Help</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home
