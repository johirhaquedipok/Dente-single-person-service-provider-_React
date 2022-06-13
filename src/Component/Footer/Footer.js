import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import VerticleLine from "../CommonComponents/VerticleLine";
import OneFooter from "./OneFooter";

const Footer = () => {
  return (
    <>
      <VerticleLine style={{ height: "150px", paddingTop: "0.8rem" }} />
      <Container fluid className="py-4 py-md-5 px-4 px-md-3 bg-light mt-5">
        <Container>
          <Row>
            <OneFooter />
            <Col className="d-flex flex-wrap align-items-center justify-content-between my-2">
              <h6 className="copyright">© dante 2022 | all rights reserved</h6>
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
    </>
  );
};

export default Footer;
