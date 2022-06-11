import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // submit email and password for login
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  // reset password for login
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Email Sent");
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, from]);
  return (
    <>
      <Row>
        <Col md={6}>
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

            <Button
              variant={emailRef && passwordRef ? "primary" : "light"}
              type="submit"
            >
              Submit
            </Button>
            <Button variant="link" type="submit" onClick={handleResetPassword}>
              Forgot Your Password
            </Button>
            <div>
              <Button variant="link" as={Link} to="/signup">
                Don't have any account?
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}>
          <SocialSignIn />
        </Col>
      </Row>

      <ToastContainer />
    </>
  );
};

export default Login;
