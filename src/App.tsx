import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "@/common/components/loader/Loader";

const App = () => {
  const ProductsRoute = lazy(() => import("@/routes/ProductsRoute"));
  const FrontendRoute = lazy(() => import("@/routes/FrontendRoute"));
  const AboutRoute = lazy(() => import("@/routes/AboutRoute"));
  const BlogRoute = lazy(() => import("@/routes/BlogRoute"));
  const ContactUsRoute = lazy(() => import("@/routes/ContactUsRoute"));
  const ApiRoute = lazy(() => import("@/routes/ApiRoute"));
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/*" element={<FrontendRoute />} />
        <Route path="products/*" element={<ProductsRoute />} />
        <Route path="about/*" element={<AboutRoute />} /> 
        {/* <Route path="test/*" element={<AboutRoute />} />  */}
        <Route path="blog/*" element={<BlogRoute />} />
        <Route path="contactus/*" element={<ContactUsRoute />} />
        <Route path="api/*" element={<ApiRoute />} />
      </Routes>
    </Suspense>
  );
};
export default App;
