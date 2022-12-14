import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";
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
      {/* vertical line */}
      <div className=" mt-4">
        <VerticleLine style={{ height: "40px" }} />
        {/* heading section */}
        <SectionHeading
          p={"Checkout"}
          text={"Fill the form to checkout our service"}
        />

        {/* vertical line */}
        <VerticleLine style={{ height: "150px" }} />
      </div>
      <Container>
        <Row>
          <Col xs={12} lg={8}>
            <div>
              <h1>Submit Your Info For Appointment</h1>
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
                <div>
                  <Button
                    variant="secondary"
                    className="submit-btn"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col xs={12} lg={4} className="overflow-hidden">
            <Image
              src={
                "https://donto-react.netlify.app/static/media/hero-theeth.54c2c4e9.png"
              }
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckOut;
