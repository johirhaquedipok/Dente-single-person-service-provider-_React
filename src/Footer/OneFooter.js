import { Col, Row } from "react-bootstrap";
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
        <ul style={{ listStyle: "none" }}>
          <li>
            <a href="#">
              <span className="icon-twitter"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-instagram"></span>
            </a>
          </li>
        </ul>
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
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Office</h2>
          <div className="block-23 mb-3">
            <ul style={{ listStyle: "none" }}>
              <li>
                <span className="icon icon-map-marker"></span>
                <span className="text">
                  203 Fake St. Mountain View, Dhaka, Bangladesh
                </span>
              </li>
              <li>
                <span className="icon icon-phone"></span>
                <span className="text">+2 392 3929 210</span>
              </li>
              <li>
                <span className="icon icon-envelope"></span>
                <span className="text">https://github.com/johirhaquedipok</span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OneFooter;
