import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark font-weight-bold">
                <Link to='/' className="navbar-brand text-danger ml-3" href="#">Menu</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <Link className="nav-item active " to='/counter'><a className="nav-link text-white  ml-4" href="#">Counter </a></Link>
                    <Link className="nav-item active" to='/Toggle '><a className="nav-link text-white  ml-4" href="#">Toggle  </a></Link>
                    <Link className="nav-item active" to='/List '><a className="nav-link text-white  ml-4" href="#">Props (array method)   </a></Link>
                    <Link className="nav-item active" to='/parent '><a className="nav-link text-white  ml-4" href="#">Props (component)  </a></Link>
                    <Link className="nav-item active" to='/form '><a className="nav-link text-white  ml-4" href="#">Form </a></Link>
                    <Link className="nav-item active" to='/condition '><a className="nav-link text-white  ml-4" href="#">Condtion Rendering  </a></Link>
                    
                
                </ul>
            </div>
            </nav>
    )
}

