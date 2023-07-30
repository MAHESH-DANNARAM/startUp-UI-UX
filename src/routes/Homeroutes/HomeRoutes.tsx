import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Pricing from "../../pages/home/Pricing";
import Test from "../../pages/home/test";

const Productsroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>  
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};
export default Productsroutes;
