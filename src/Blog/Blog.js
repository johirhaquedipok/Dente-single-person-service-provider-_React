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
                <Accordion.Header>
                  Difference between authorization and authentication
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <p>
                      Authentication verifies the user's identity to give him
                      the access of the system. The process challenges the user
                      to validate credentials (for example, through passwords,
                      answers to security questions, or facial recognition)
                    </p>
                  </div>
                  <div>
                    <p>
                      While, Authorization means what a user can access like
                      specific applications, files, and data. And authorization
                      comes into play after authentication.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Firebase provides backend services and uses eady-made UI
                    libraries to authenticate users and also easy-to-use
                    SDKs(software development toolkit).It has so many
                    authentication varities like using passwords, phone numbers,
                    popular federated identity providers like Google, Facebook
                    and Twitter, and more.
                  </p>
                  <p>
                    There are some ways to authenticate can be done through
                    cards, retina scans, voice recognition, and fingerprints.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What other services does firebase provide other than
                  authentication?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Firebase provides other than authentication</p>
                  Cloud Firestore. Cloud Functions. Authentication. Hosting.
                  Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
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
