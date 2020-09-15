import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './home.css';
import {useSelector,useDispatch} from 'react-redux';
import { signout } from '../actions/authActions';

const Header =()=> {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const logout=()=>{
        dispatch(signout());
    }
    const renderLoggedInLinks = () => {
        return(
            <>
                <Button variant="outline-secondary text-white" onClick={logout()}>Sign out</Button>
            </>
        )
    }
    const renderNonLoggedInLinks = () => {
        return (
            <>
                <Link exact className="active_class login_btn" to="/signin">
                    <Button variant="outline-secondary text-white">Sign In</Button>
                </Link>
                <Link exact className="active_class login_btn" to="/signup">
                    <Button className="ml-2" variant="outline-secondary text-white">Sign Up</Button>
                </Link>
            </>
        );
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink className="navbar-brand" to="/">Admin dashboard</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {auth.authenticate?renderLoggedInLinks():renderNonLoggedInLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;
