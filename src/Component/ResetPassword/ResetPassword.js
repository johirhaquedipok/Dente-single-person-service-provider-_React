import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";
import Loading from "../Loading/Loading";

const ResetPassword = () => {
  // react bootstrap validation
  const [validated, setValidated] = useState(false);
  const emailRef = useRef("");
  // firebase reset password with email
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // loading
  if (sending) {
    <Loading />;
  }
  // errror message
  let errorElement;
  if (resetError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error:
          {resetError?.message}
        </p>
      </div>
    );
  }

  // reset password for login
  const handleResetPassword = async (event) => {
    // react bootstrap validation
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const email = emailRef.current.value;
    setValidated(true);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent to your account");
    }
  };

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
              <h1 className="text-center">Reset Password</h1>
              <p className="lead">
                Hey, there. Enter your email to reset your password
              </p>
            </div>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleResetPassword}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <div className="row mb-4">
                <div className="d-grid gap-2">
                  <Button variant="secondary" type="submit">
                    Rest Your Passowrd
                  </Button>
                </div>
              </div>
            </Form>

            {/* Error message */}
            {errorElement}
          </div>
        </Col>
      </Row>

      {/* toast */}
      <ToastContainer />
    </>
  );
};

export default ResetPassword;
