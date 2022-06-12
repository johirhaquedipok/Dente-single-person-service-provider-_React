import { Container } from "react-bootstrap";
import Services from "../Services/Services";
import HomeCarousels from "./HomeCarousels";

const Home = () => {
  return (
    <Container>
      <HomeCarousels />
      <Services />
    </Container>
  );
};

export default Home;
