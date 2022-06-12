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
      <Card
        className="bg-white overflow-hidden"
        style={{ borderRadius: "1rem" }}
      >
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description.length < 50
              ? description
              : description?.slice(0, 50).concat("...")}
          </Card.Text>
          <Card.Text className="fw-bold">Price: ${price}</Card.Text>
          <Button
            variant="light"
            className="border"
            onClick={() => handleService(id)}
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
