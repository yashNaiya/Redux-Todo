import React from 'react'
import { Button, Container, Nav, Navbar, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store/loginSlice'

const NavBar = () => {
    const user = useSelector(state=>state.login)
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Todo List</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to={'/'} as={Link}>List</Nav.Link>
                    </Nav>
                    <NavbarToggle />
                    <NavbarCollapse className="justify-content-end">
                        {/* <Nav.Link to={'/login'} as={Link}>Login</Nav.Link> */}
                        {user._id?<Button onClick={()=>{
                            dispatch(remove())
                        }}>Logout</Button>
                        :<Button to={'/login'} as={Link}>Login</Button>}
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
