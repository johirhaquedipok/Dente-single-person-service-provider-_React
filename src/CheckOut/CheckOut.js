import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import PopUp from "../PopUp/PopUp";

const CheckOut = () => {
  // user hook from firebase hook
  const [user] = useAuthState(auth);
  // modal hooks from bootstrap
  const [show, setShow] = useState(false);
  const [textPop, setTextPop] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // input fields hooks
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phoneNumber || "");
  const [address, setAddress] = useState("");
  const [marks, setMarks] = useState("");

  // handle submit
  let errorElement;
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleShow();
    if (name && email) {
      setTextPop("Thank You For Your Cooperation");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setMarks("");
    } else {
      setTextPop(<p className="text-danger">Please Enter name and email</p>);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <div>
              <h1>Request Appointment</h1>
              {errorElement}
            </div>
            <div>
              <Form className="row mb-3" onSubmit={handleSubmitForm}>
                <Col xs={12} md={6} lg={6} className="mb-2">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="address"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <div xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="remarks"
                    rows={3}
                    className=" border-0 shadow-sm"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    style={{ height: "10rem" }}
                  />
                </div>
                <PopUp
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  textPop={textPop}
                />
                <Button
                  variant="secondary"
                  className="submit-btn"
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckOut;
