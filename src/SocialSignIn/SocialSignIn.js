import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
const SocialSignIn = () => {
  // google sign in
  const [signInWithGoogle, googleUser, googleLoading, error] =
    useSignInWithGoogle(auth);

  // github sign in
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // facebook sign in
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  // loading
  if (googleLoading || githubLoading || facebookLoading) {
    <Loading />;
  }
  // react router dom hooks
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // errror message
  let errorElement;
  if (error || githubError || facebookError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {githubError?.message}
          {facebookError?.message}
        </p>
      </div>
    );
  }

  // after succesful sign in it will navigate you to the home page
  // this use Effect is used for broweserrouter warning in the console while loggin in with social media

  useEffect(() => {
    if (googleUser || githubUser || facebookUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, githubUser, facebookUser, navigate, from]);
  return (
    <>
      <div>{errorElement}</div>
      <div className="text-center mt-4">Or Sign in with </div>
      <div className="d-md-flex  align-items-center justify-content-md-between mb-2 mt-5">
        <div className="d-grid gap-2">
          <Button
            variant="light"
            className="d-flex align-items-center justify-content-center mb-2 border"
            onClick={() => signInWithGoogle()}
          >
            <BsGoogle />
            <span className="ms-1">Google </span>
          </Button>
        </div>
        <div className="d-grid gap-2 ">
          <Button
            variant="light"
            className=" d-flex align-items-center justify-content-center mb-2 mx-1 border"
            onClick={() => signInWithGithub()}
          >
            <BsGithub />
            <span className="ms-1">GitHub </span>
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button
            variant="light"
            className="d-flex align-items-center justify-content-center mb-2 border"
            onClick={() => signInWithFacebook()}
          >
            <BsFacebook />
            <span className="ms-1">Facebook</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialSignIn;
