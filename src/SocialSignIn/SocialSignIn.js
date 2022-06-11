import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const SocialSignIn = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let errorElement;
  if (googleError) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleUser) {
    navigate("/home");
  }
  return (
    <>
      <div>{errorElement}</div>
      <div className="text-center mt-4">Or Sign in with </div>
      <div className="d-md-flex  align-items-center justify-content-md-between  mb-2 mt-5">
        <div className="d-grid ">
          <Button
            variant="primary"
            className="d-flex align-items-center justify-content-center mb-2"
            onClick={() => signInWithGoogle()}
          >
            <BsGoogle /> <span className="ms-2">Google </span>
          </Button>
        </div>
        <div className="d-grid ">
          <Button
            variant="secondary"
            className=" d-flex align-items-center justify-content-center mb-2"
          >
            <BsGithub /> <span className="ms-2">GitHub </span>
          </Button>
        </div>
        <div className="d-grid ">
          <Button
            variant="info"
            className="d-flex align-items-center justify-content-center mb-2"
          >
            <BsFacebook /> <span className="ms-2">Facebook </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialSignIn;
