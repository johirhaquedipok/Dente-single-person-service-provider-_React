import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleService = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            {price}
          </Card.Text>
          <Button variant="primary" onClick={() => handleService(id)}>
            {" "}
            More Info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
