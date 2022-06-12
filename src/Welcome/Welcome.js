import { Card, Col, Container, Image, Row } from "react-bootstrap";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";

const Welcome = () => {
  return (
    <>
      {/* vertical line */}
      <div className=" my-4">
        <VerticleLine style={{ height: "40px" }} />
        {/* heading section */}
        <SectionHeading p={"Welcome"} text={"To Our Family"} />

        {/* vertical line */}
        <VerticleLine style={{ height: "150px" }} />
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
            <Col lg={6} className="align-self-end">
              <div className="display-1">What's with the Denta</div>
              <Row xs={1} md={2} className="g-4 mt-4 ">
                <Col>
                  <Card className="shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bolder">500+ </Card.Title>
                      <Card.Text className="lead">Happy Patients</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bolder">90+ </Card.Title>
                      <Card.Text className="lead">Satisfied Reviews</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bolder">25+ </Card.Title>
                      <Card.Text className="lead">Years Experience</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bolder">55+ </Card.Title>
                      <Card.Text className="lead">Dental Awards</Card.Text>
                    </Card.Body>
                  </Card>
                  {/* https://preview.themeforest.net/item/donto-dental-clinic-medical-health-react-template/full_screen_preview/28998255 */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
