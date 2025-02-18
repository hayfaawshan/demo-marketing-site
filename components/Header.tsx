import Link from 'next/link'
import {Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
 return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Container>
                <Navbar.Toggle aria-controls="navbarNav" data-testid="navbar-toggle">
                <h1>Hello!</h1>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarNav" data-testid="navbar-content">
                    <Nav className="ms-auto text-dark">
                        <Nav.Link as={Link} href="/" className="text-dark text-decoration-none">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;