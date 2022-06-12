import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";

const Blog = () => {
  return (
    <div className=" my-4">
      <VerticleLine style={{ height: "40px" }} />
      {/* heading section */}
      <SectionHeading p={"Blog"} text={"Learn About Some Info"} />

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
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
