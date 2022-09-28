import React from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import Sidebar from '../../components/Dashboard/Sidebar'
import Home from '../../components/Dashboard/Home'
import Carousels from '../../components/Dashboard/Carousels'
import Navbarheader from '../../components/LandingPage/NavBar/Navbarheader'



export default function Homepage() {
    return (
        
        <>
        
            <Navbarheader />
            {/* <Sidebar children={undefined} /> */}
            {/* <Carousels /> */}
            <Home />
            
        </>
    )
}
