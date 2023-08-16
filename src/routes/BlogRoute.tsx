import Blog from "@/frontend/pages/Blog";
import { Routes, Route } from "react-router-dom";
import "@/vendor/animate.css-master/animate.min.css";
import "@/vendor/fontawesome/css/fontawesome-all.min.css";
import "@/vendor/bootstrap/css/bootstrap-4-navbar.css";
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/vendor/OffCanvasMenuEffects/css/menu_sideslide.css";
import "@/vendor/owlcarousel/owl.carousel.min.css";
import "@/vendor/owlcarousel/owl.theme.default.min.css";
import "@/custom/css/custom-responsive.css";
import "@/custom/css/custom.css";
import "@/custom/css/fables-icons.css";

const BlogRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />}></Route>
    </Routes>
  );
};
export default BlogRoute;
