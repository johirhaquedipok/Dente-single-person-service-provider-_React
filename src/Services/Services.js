import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SectionHeading from "../CommonComponents/SectionHeading";
import VerticleLine from "../CommonComponents/VerticleLine";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

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

      {/* card */}
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 mt-4 ">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
