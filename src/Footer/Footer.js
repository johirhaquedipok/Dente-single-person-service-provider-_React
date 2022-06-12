import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import OneFooter from "./OneFooter";

const Footer = () => {
  return (
    <Container fluid className="py-4 py-md-5 px-4 px-md-3 bg-light mt-5">
      <Container>
        <Row>
          <OneFooter />
          <Col className="d-flex align-items-center justify-content-between my-2">
            <div className="logo-bottom">
              <Link to="/home">Dante</Link>
            </div>
            <h3 className="copyright">© dante 2022 | all rights reserved</h3>
            <div className="d-flex align-items-center justify-content-between">
              <div title="facebook" className="me-2 ">
                <BsFacebook />
              </div>

              <div title="twitter" className="mx-2">
                <BsTwitter />
              </div>

              <div title="instagram" className="mx-2">
                <BsInstagram />
              </div>

              <div title="linkedin" className="ms-2">
                <BsLinkedin />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
