import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";
import Loading from "../Loading/Loading";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Login = () => {
  // react bootstrap validation
  const [validated, setValidated] = useState(false);

  // firebase sing in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // loading
  if (loading) {
    <Loading />;
  }

  const emailRef = useRef("");
  const passwordRef = useRef("");

  // react router dom  hook
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // submit email and password for login
  function handleSubmit(event) {
    // react bootstrap validation
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    // firebase sign in
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setValidated(true);
    signInWithEmailAndPassword(email, password);
  }

  // errror message
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }

  // after succesful sign in it will navigate you to the home page
  // this use Effect is used for broweserrouter warning in the console while loggin in with social media
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, from]);

  return (
    <>
      <Container>
        <Row className="justify-content-center mb-3 bg-light py-4">
          <VerticleLine style={{ height: "40px" }} />
          {/* heading section */}
          <SectionHeading p={"Welcome"} text={"To Our Family"} />

          {/* vertical line */}
          <VerticleLine style={{ height: "100px" }} />
          {/* section details */}
          <Col md={5} xs={12}>
            <div
              className="border p-3 bg-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="mb-5">
                <h3 className="text-center">Log In</h3>
                <p className="lead">
                  Hey, there. Enter your email and password to sign in to your
                  account
                </p>
              </div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    ref={emailRef}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </Form.Group>
                <div className="row mb-4">
                  <Col className="col">
                    <Button variant="link" type="submit" as={Link} to="/reset">
                      Forgot Your Password
                    </Button>
                  </Col>
                </div>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Sing in
                  </Button>
                </div>
              </Form>

              {/* Error message */}
              {errorElement}

              {/* socila media sign in  */}
              <SocialSignIn />
              {/* sign up account toggle */}
              <div className=" d-flex align-items-center justify-content-center">
                Don't have any account?
                <Button variant="link" as={Link} to="/signup">
                  Register Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* toast */}
      <ToastContainer />
    </>
  );
};

export default Login;
