import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CheckOut = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const marksRef = useRef("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-12 col-lg-8">
            <div>
              <h1>Request Appointment</h1>
            </div>
            <div>
              <Form className="row mb-3" onSubmit={handleSubmitForm}>
                <Col xs={12} md={6} lg={6} className="mb-2">
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    placeholder="name"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="email"
                    ref={emailRef}
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="text"
                    ref={phoneRef}
                    placeholder="phone"
                    className=" border-0 shadow-sm"
                    style={{ height: "3rem" }}
                  />
                </Col>
                <Col xs={12} md={6} lg={6} className="mb-3">
                  <Form.Control
                    type="text"
                    ref={addressRef}
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
                    ref={marksRef}
                    style={{ height: "10rem" }}
                  />
                </div>
                <Button
                  variant="secondary"
                  className="submit-btn"
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CheckOut;
