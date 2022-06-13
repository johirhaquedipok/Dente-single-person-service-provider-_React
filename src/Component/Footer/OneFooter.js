import { Col, Row } from "react-bootstrap";
import { BsHouse, BsLink, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

const OneFooter = () => {
  return (
    <Row className=" my-2">
      <Col md={4}>
        <div className=" mb-4">
          <h2>Dente</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div className=" mb-4 ml-md-5">
          <h2>Quick Links</h2>
          <ul style={{ listStyle: "none" }} className="list-unstyled">
            <li>
              <a href="#home" className="py-2 d-block text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a
                href="#home#welcome"
                className="py-2 d-block text-decoration-none"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="#home#service"
                className="py-2 d-block text-decoration-none"
              >
                Service
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                href="#"
                className="py-2 d-block text-decoration-none"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="py-2 d-block text-decoration-none">
                AboutMe
              </Link>
            </li>
          </ul>
        </div>
      </Col>

      <Col md={4}>
        <div className=" mb-4">
          <h2>Office</h2>
          <div className="mb-3">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsHouse />
                </span>
                <span>203 Fake St. Mountain View, Dhaka, Bangladesh</span>
              </li>
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsPhone />
                </span>
                <span>+2 392 3929 210</span>
              </li>
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsLink />
                </span>

                <span className="text-break">
                  https://github.com/johirhaquedipok
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OneFooter;
