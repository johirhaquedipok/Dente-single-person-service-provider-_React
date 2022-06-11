import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const SignUp = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
    alert("Updated email address");
  };
  if (user) {
    navigate("/home");
  }
  return (
    <>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
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
      <Button variant="link" as={Link} to="/login">
        Already have an account?
      </Button>
      <SocialSignIn />
    </>
  );
};

export default SignUp;
