import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.scss";
export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">S-Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-   navbar-nav">
            <Nav className="me-auto nav-item">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Clothing
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Technologies
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Home Furniture
              </Nav.Link>
              {/* <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
