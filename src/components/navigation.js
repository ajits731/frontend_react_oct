import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

const NavigationBar = () => {
    const handleLogout = () => {
        localStorage.clear();
    }
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link href="/home">Home</Nav.Link> 
               <Nav.Link href="/product">Products</Nav.Link>
               <Nav.Link href="/about" >About us</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <Outlet />
        </>
    )
};

export default NavigationBar;