import ContactUs from "@/frontend/pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import "@/vendor/animate.css-master/animate.min.css";
import "@/vendor/fontawesome/css/fontawesome-all.min.css";
import "@/vendor/bootstrap/css/bootstrap-4-navbar.css";
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/vendor/portfolio-filter-gallery/portfolio-filter-gallery.css";
import "@/vendor/fancybox-master/jquery.fancybox.min.css";
import "@/vendor/range-slider/range-slider.css";
import "@/vendor/OffCanvasMenuEffects/css/menu_sideslide.css";
import "@/vendor/owlcarousel/owl.carousel.min.css";
import "@/vendor/owlcarousel/owl.theme.default.min.css";
import "@/custom/css/custom-responsive.css";
import "@/custom/css/custom.css";
import "@/custom/css/fables-icons.css";

const ContactsUsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactUs />}></Route>
    </Routes>
  );
};
export default ContactsUsRoute;
