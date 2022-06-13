import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="sm" className="border-bottom">
      <Container>
        <Nav.Link as={Link} to="/home" className="fs-5 fw-bold">
          Dente
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <CustomLink to="/">Home</CustomLink>

            <CustomLink to="/welcome">Welcome</CustomLink>
            <CustomLink to="/services">Service</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/aboutme">AboutMe</CustomLink>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Button onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">Sign Up</CustomLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
