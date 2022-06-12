import { Container } from "react-bootstrap";
import Services from "../Services/Services";
import Welcome from "../Welcome/Welcome";
import HomeCarousels from "./HomeCarousels";

const Home = () => {
  return (
    <Container>
      <HomeCarousels />
      <Welcome />
      <Services />
    </Container>
  );
};

export default Home;
