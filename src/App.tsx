import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loaders/Loader";
import { useEffect } from "react";
import Login from "./pages/Login";

function App() {
  const Home = lazy(() => import("./routes/Homeroutes/HomeRoutes")); 
<<<<<<< HEAD
  const Products = lazy(()=> import("./routes/Homeroutes/indexelement"))

=======
  const Products = lazy(() => import("./routes/Homeroutes/Indexelement"))
>>>>>>> d5c3b79ab3d927be21de2865accc79dc8b53f3c8
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home/>} />   
      <Route path="/products" element={<Products />} />   
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </Suspense>
  );
}
export default App;
