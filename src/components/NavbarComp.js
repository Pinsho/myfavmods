import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './pages/Home';
import DCS from './pages/DCS';
import MSFS2020 from './pages/MSFS2020';
import AssettoCorsa from './pages/AssettoCorsa';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router basename="/myfavmods">
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand as={Link} to="/myfavmods/"><i className='bx bx-extension logo'></i><span className='logoText'>myfavmods</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100%' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/myfavmods/">Home</Nav.Link>
                                <NavDropdown title="Flight Sim" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/myfavmods/dcs">DCS World</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myfavmods/msfs2020">MSFS 2020</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                                <NavDropdown title="Motor Sim" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/myfavmods/assettocorsa">Assetto Corsa</NavDropdown.Item>
                                {/* <NavDropdown.Item as={Link} to="/myfavmods/rfactor2">rFactor 2</NavDropdown.Item> */}
                                </NavDropdown>
                                {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/myfavmods/" element={<Home/>}/>
                        <Route path="/myfavmods/dcs" element={<DCS/>}/>
                        <Route path="/myfavmods/msfs2020" element={<MSFS2020/>}/>
                        {/* <Route path="/myfavmods/rfactor2" element={<Rfactor2/>}/> */}
                        <Route path="/myfavmods/assettocorsa" element={<AssettoCorsa/>}/>
                        {/* <Route path="/contact" element={<Contact/>}/> */}
                    </Routes>
                </div>
            </Router>
        )
    }
}
