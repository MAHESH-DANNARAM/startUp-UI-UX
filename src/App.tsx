import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "@/common/components/loader/Loader";

const App = () => {
  const ProductsRoute = lazy(() => import("@/routes/ProductsRoute"));
  const FrontendRoute = lazy(() => import("@/routes/FrontendRoute"));
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/*" element={<FrontendRoute />} />
        <Route path="products/*" element={<ProductsRoute />} />
      </Routes>
    </Suspense>
  );
};
export default App;
