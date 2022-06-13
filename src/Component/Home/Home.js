import { Container } from "react-bootstrap";
import Services from "../Services/Services";
import Welcome from "../Welcome/Welcome";
import HomeCarousels from "./HomeCarousels";

const Home = () => {
  return (
    <>
      <HomeCarousels />
      <Container>
        <Welcome />
        <Services />
      </Container>
    </>
  );
};

export default Home;
