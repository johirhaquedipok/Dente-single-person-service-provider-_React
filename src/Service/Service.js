import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();

  return (
    <Col>
      <Card
        className="bg-white overflow-hidden shadow-sm border-0"
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
            onClick={() => navigate(`/services/${id}`)}
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
