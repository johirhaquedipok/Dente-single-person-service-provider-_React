import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const SocialSignIn = () => {
  const navigate = useNavigate();
  // google sign in
  const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

  // github sign in
  const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);

  // facebook sign in
  const [signInWithFacebook, facebookUser, facebookError] =
    useSignInWithFacebook(auth);

  // errror message
  let errorElement;
  if (googleError || githubError || facebookError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message} {githubError?.message}{" "}
          {facebookError?.message}
        </p>
      </div>
    );
  }

  // after succesful sign in it will navigate you to the home page
  // this use Effect is used for broweserrouter warning in the console while loggin in with social media
  useEffect(() => {
    if (googleUser || githubUser || facebookUser) {
      navigate("/home");
    }
  }, [googleUser, githubUser, facebookUser, navigate]);
  return (
    <>
      <div>{errorElement}</div>
      <div className="text-center mt-4">Or Sign in with </div>
      <div className="d-md-flex  align-items-center justify-content-md-between  mb-2 mt-5">
        <div className="d-grid gap-2">
          <Button
            variant="light"
            className="d-flex align-items-center justify-content-center mb-2 border"
            onClick={() => signInWithGoogle()}
          >
            <BsGoogle /> <span className="ms-1">Google </span>
          </Button>
        </div>
        <div className="d-grid gap-2 ">
          <Button
            variant="light"
            className=" d-flex align-items-center justify-content-center mb-2 mx-1 border"
            onClick={() => signInWithGithub()}
          >
            <BsGithub /> <span className="ms-1">GitHub </span>
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button
            variant="light"
            className="d-flex align-items-center justify-content-center mb-2 border"
            onClick={() => signInWithFacebook()}
          >
            <BsFacebook /> <span className="ms-1">Facebook</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialSignIn;
