import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Pricing from "../../pages/Pricing";

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
