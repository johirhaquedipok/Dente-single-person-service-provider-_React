import { Route, Routes } from "react-router-dom";
import CheckOut from "./CheckOut/CheckOut";

import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MyProfile from "./MyProfile/MyProfile";
import RequireAuth from "./RequireAuth/RequireAuth";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
