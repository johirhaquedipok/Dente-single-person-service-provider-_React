import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("../services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);

  const newCard = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <>
      {/* vertical line */}
      <div className=" mt-4">
        <VerticleLine style={{ height: "40px" }} />
        {/* heading section */}
        <SectionHeading p={"SERVICES"} text={"Toothcare Services"} />

        {/* vertical line */}
        <VerticleLine style={{ height: "150px" }} />
      </div>
      <Container>
        <Row>
          <Col md={4} className="align-self-center">
            <Image src={newCard?.img} alt={newCard?.name} fluid rounded></Image>
          </Col>
          <Col md={8}>
            <div className="p-5">
              <div className="display-6">{newCard?.name}</div>
              <div className=" my-4 lead">{newCard?.description}</div>
              <Button as={Link} to="/checkout">
                Proceed CheckOut
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceDetails;
