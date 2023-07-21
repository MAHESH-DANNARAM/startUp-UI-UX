import { Routes, Route, } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loaders/Loader";
import Login from "./pages/Login";

function App() {
  const Home = lazy(() => import("./routes/Homeroutes/HomeRoutes"));
  const Products = lazy(() => import("./routes/Homeroutes/Products"));
  const Image = lazy(() => import("./pages/Indexelement/Pages/Text_to_Image") )

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="products/*" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </Suspense>
  );
}
export default App;
