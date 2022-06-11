import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <div className="display-6">
        Welcome to Service Details<div className="display-1">{serviceId}</div>
        <Button as={Link} to="/checkout">
          Proceed CheckOut
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetails;
