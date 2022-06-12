import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import OneFooter from "./OneFooter";

const Footer = () => {
  return (
    <Row className="mt-5">
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
  );
};

export default Footer;
