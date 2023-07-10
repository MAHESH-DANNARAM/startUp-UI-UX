import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loaders/Loader";
import FrameComponent from "./pages/frame-component";
import Products from './pages/Products';
import Transcript from "./pages/pages items/transcript";
import { useEffect } from "react";

function App() {
  const Productsroutes = lazy(() => import("./routes/productRoutes/productroutes")); 

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
      <Route path="/" element={<FrameComponent />} />
      <Route path="product/*" element={<Productsroutes/>}/>
    </Routes>
    </Suspense>
  );
}
export default App;
