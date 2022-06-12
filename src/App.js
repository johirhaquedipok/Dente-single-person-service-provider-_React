import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import Blog from "./Blog/Blog";
import CheckOut from "./CheckOut/CheckOut";
import Footer from "./Footer/Footer";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MyProfile from "./MyProfile/MyProfile";
import NotFound from "./NotFound/NotFound";
import RequireAuth from "./RequireAuth/RequireAuth";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import SignUp from "./SignUp/SignUp";
import Welcome from "./Welcome/Welcome";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/myprofile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
