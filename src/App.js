
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/Css/main.css"
import Footer from "./Components/Footer";
import Main from "./Screens/Home/Main";
import NavBar from "./Components/NavBar";
import ProgressCircle from "./Components/ProgressCircle";
import ContactUs from "./Screens/Contact/ContactUs";

import CustomCursor from "./Components/CustomCursor";
import Login from "./Auth/Login";
import Register from "./Screens/Company/Register";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PageNotFound from "./Components/PageNotFound";
import OtherServices from "./Screens/OtherServices/OtherServices";

function App() {

  return (
    <>
      <CustomCursor />
      <Router>
        <NavBar />
        <ProgressCircle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
