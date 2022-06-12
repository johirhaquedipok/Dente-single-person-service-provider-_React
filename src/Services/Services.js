import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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
      <div
        className="d-flex align-items-center justify-content-center mt-5"
        style={{ height: "40px" }}
      >
        <div class="vr"></div>
      </div>
      <div className="text-center ">
        <h4>SERVICES</h4>
        <h2>Toothcare Services</h2>
      </div>
      {/* vertical line */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "150px" }}
      >
        <div class="vr"></div>
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
