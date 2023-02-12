import React from 'react';
import { GoGlobe } from "react-icons/go";

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <GoGlobe className='globe-icon'/>
            <h1 className='nav-title'>my travel journal.</h1>
        </div>
    )
}