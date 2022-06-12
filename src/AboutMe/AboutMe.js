import { Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";

const AboutMe = () => {
  return (
    <div className=" my-4">
      <VerticleLine style={{ height: "40px" }} />
      {/* heading section */}
      <SectionHeading p={"About Me"} text={"Learn About Me"} />

      {/* vertical line */}
      <VerticleLine style={{ height: "150px", paddingBottom: "1rem" }} />
      {/* section details */}
      <Container>
        <Row>
          <Col lg={6} className="overflow-hidden">
            <Image
              fluid
              src={
                "https://donto-react.netlify.app/static/media/about-banner1.ce5f70ed.png"
              }
              alt={"banner"}
            />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
