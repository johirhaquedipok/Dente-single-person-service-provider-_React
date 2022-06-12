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
      <Row className="justify-content-center my-5">
        <Col md={6}>
          <div className="border p-3" style={{ borderRadius: "1rem" }}>
            <div className="mb-5">
              <h1 className="text-center">Sign Up</h1>
              <p>
                Hey, there. Enter your email and password to sign up to your new
                account
              </p>
            </div>
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
              <div className="d-grid gap-2">
                <Button
                  disabled={check ? false : true}
                  variant={check ? "primary" : "light"}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
            <SocialSignIn />
            <div className=" d-flex align-items-center justify-content-center">
              Already have an account?
              <Button variant="link" as={Link} to="/login">
                Login
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
