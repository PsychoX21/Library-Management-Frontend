import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navbar.css';


export const Navbar = (props) => {
    let homestyle={};
    let mapstyle={};
    let profilestyle={};
    
    const highlight={
        background: " #FEFAE0",
        color:" #133215"
    }

    return (

        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="hometab nav-item" style={props.page==="home"? highlight: {}}>
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="maptab nav-item" style={props.page==="map"? highlight: {}}>
                                <Link className="nav-link" to="/map">Map</Link>
                            </li>
                            <li className="profiletab nav-item" style={props.page==="profile"? highlight: {}}>
                                <Link className="nav-link" to="/yourprofile">Profile</Link>
                            </li>
                        </ul>
                        {props.searchbar && (
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.defaultProps={
    searchbar: false,
}

Navbar.propTypes = {
    searchbar: PropTypes.bool,
    page: PropTypes.string.isRequired,
}