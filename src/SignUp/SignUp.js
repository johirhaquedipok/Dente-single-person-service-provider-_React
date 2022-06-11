import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    setValidated(true);
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
    if (user) alert("Updated email address");
  };
  if (user) {
    navigate("/home");
  }
  return (
    <>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form noValidate validated={validated} onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                type="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name={"password"}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={() => setCheck(!check)}
                type="checkbox"
                label="I agree all terms and conditions"
              />
            </Form.Group>
            <Button
              disabled={check ? false : true}
              variant={check ? "primary" : "light"}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <SocialSignIn />
          <div className=" d-flex align-items-center justify-content-center">
            Already have an account?
            <Button variant="link" as={Link} to="/login">
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
