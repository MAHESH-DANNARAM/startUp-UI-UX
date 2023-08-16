import About from "@/frontend/pages/About";
import "@/vendor/animate.css-master/animate.min.css";
import "@/vendor/loadscreen/css/spinkit.css";
import "@/vendor/fontawesome/css/fontawesome-all.min.css";
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/vendor/bootstrap/css/bootstrap-4-navbar.css";
import "@/vendor/portfolio-filter-gallery/portfolio-filter-gallery.css";
import "@/vendor/fancybox-master/jquery.fancybox.min.css";
import "@/vendor/range-slider/range-slider.css";
import "@/vendor/owlcarousel/owl.carousel.min.css";
import "@/vendor/owlcarousel/owl.theme.default.min.css";
import "@/custom/css/custom.css";
import "@/custom/css/custom-responsive.css";
import "@/custom/css/fables-icons.css";
import { Routes, Route } from "react-router-dom";

const AboutRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<About />}></Route>
    </Routes>
  );
};
export default AboutRoute;
