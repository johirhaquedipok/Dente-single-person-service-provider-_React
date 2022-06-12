import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
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
        <CustomLink to="/home">Dente</CustomLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <CustomLink to="/">Home</CustomLink>

            <CustomLink to="/welcome">Welcome</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/aboutme">AboutMe</CustomLink>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Button onClick={handleSignOut}>Sign Out</Button>
                <CustomLink to="/myprofile">MyProfile</CustomLink>
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
