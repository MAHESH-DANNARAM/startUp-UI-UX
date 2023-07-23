import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Pricing from "../../pages/home/Pricing";

const Productsroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>  
      </Route>
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};
export default Productsroutes;
