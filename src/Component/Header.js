import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from '../img/logo.png'

import Home from '../Pages/Home.js'
import Contacts from '../Pages/Contacts';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/tarif"> Тариф </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                className='top'
                                width="20"
                                height="30"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/regestr"> Регистрация </Nav.Link>
                                <Nav.Link href="/vhod"> Вход </Nav.Link>
                                <Nav.Link href="/robokassa"> RoboKassa </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contacts" component={Contacts} />
                    </Switch>
                </Router>
            </>
        )
    }
}