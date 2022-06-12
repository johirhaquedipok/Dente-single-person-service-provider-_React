import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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

        <div className="text-center ">
          <h4>SERVICES</h4>
          <h2>Toothcare Services</h2>
        </div>
        {/* vertical line */}
        <VerticleLine style={{ height: "150px" }} />
      </div>

      {/* card */}
      <Row xs={1} md={2} lg={4} className="g-4 mt-4 ">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Row>
    </>
  );
};

export default Services;
