import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
 return (
    <Navbar expand="md" className="relative container mx-auto p-4 flex justify-between">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" data-testid="navbar-toggle">
          <h1>Hello!</h1>
        </Navbar.Toggle>
        <Navbar.Collapse className="ms-auto text-dark">
          <Nav>
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;



# TOOL CALLS

## Reasoning

I'm now going to look at the `src/utils/api.js` file to see how the API request is being made so that I can resolve the network request failure.

## Calls

{
  "type": "fuzzy_file_search",
  "query": "src/utils/api.js"
}