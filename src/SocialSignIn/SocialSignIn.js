import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsGoogle } from "react-icons/bs";
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
      <div className="text-center">
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
      <div>{errorElement}</div>
      <div>Or Sign in with </div>
      <div className="d-flex flex-column mb-2 mt-5">
        <Button
          variant="primary"
          size="lg"
          className=" mb-2"
          onClick={() => signInWithGoogle()}
        >
          <BsGoogle /> Google
        </Button>
        <Button variant="secondary" size="lg" className=" mb-2">
          GitHub
        </Button>
        <Button variant="info" size="lg" className=" mb-2">
          Facebook
        </Button>
      </div>
    </>
  );
};

export default SocialSignIn;
