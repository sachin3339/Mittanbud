import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./Components/Css/main.css";
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
import JobPost from "./JobPost/JobPost";
import Dashboard from "./Dashboard/Dashboard";
import { addBodyClass, removeBodyClass } from "./Utils/ManageBodyClass"; // Import the utility functions
import Applyjob from "./ApplyJob/Applyjob";
import Category from "./Category/Category";
import SubCategory from "./Category/SubCategory";
// import Signup from "./Auth/Signup";
function Layout() {
  const location = useLocation();
  const validPaths = ["/", "/category", "/jobapply/:type", "/login", "/signup", "/contactus", "/register", "/privacy-policy", "/other-services", "/jobpost", "/dashboard", "/mypost"];
  const hideNavAndFooter = location.pathname === "/dashboard" || location.pathname === "/mypost" || !validPaths.includes(location.pathname);
  console.log(location.pathname)
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      addBodyClass("dashboard-body");
    } else {
      removeBodyClass("dashboard-body");
    }

    // Cleanup function to remove the class when the component is unmounted or path changes
    return () => removeBodyClass("dashboard-body");
  }, [location.pathname]);

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <ProgressCircle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/other-services" element={<OtherServices />} />
        <Route path="/jobpost" element={<JobPost />} />
        <Route path="/jobapply/:type" element={<Applyjob />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/sub-category/:type" element={<SubCategory />} />
        <Route path="/*" element={<Dashboard />} />
        {/* <Route path="/signup" element={<Signup />} />*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
