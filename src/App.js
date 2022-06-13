import { Route, Routes } from "react-router-dom";
import AboutMe from "./Component/AboutMe/AboutMe";
import Blog from "./Component/Blog/Blog";
import CheckOut from "./Component/CheckOut/CheckOut";
import Footer from "./Component/Footer/Footer";

import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import ServiceDetails from "./Component/ServiceDetails/ServiceDetails";
import Services from "./Component/Services/Services";
import SignUp from "./Component/SignUp/SignUp";
import Welcome from "./Component/Welcome/Welcome";

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

        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
