import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";
import auth from "../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignUp = () => {
  // react bootstrap validation
  const [validated, setValidated] = useState(false);

  // react router dom hook
  const navigate = useNavigate();
  // checkbox state for sign up button enable disable
  const [check, setCheck] = useState(false);

  // firebse create user hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // firebse update user hook
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //  sign up button onClick handler
  const handleSignUp = async (event) => {
    event.preventDefault();
    //  bootstrap validation
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

  // after succesful sign up it will navigate you to the home page
  // this use Effect is used for broweserrouter warning in the console while loggin in with social media
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [navigate, user]);
  return (
    <>
      <Row className="justify-content-center mb-3 bg-light py-4">
        <VerticleLine style={{ height: "40px" }} />
        {/* heading section */}
        <SectionHeading p={"Welcome"} text={"To Our Family"} />

        {/* vertical line */}
        <VerticleLine style={{ height: "100px" }} />
        {/* section details */}
        <Col md={4}>
          <div className="border p-3 bg-white" style={{ borderRadius: "1rem" }}>
            <div className="mb-5">
              <h1 className="text-center">Sign Up</h1>
              <p className="lead">
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
