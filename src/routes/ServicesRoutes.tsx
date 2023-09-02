import { Routes, Route } from "react-router-dom";
import Services from "@/Services/pages/Services";
import Radio from "@/Services/pages/Radio";
import Layout from "@/Services/Layout";
import Test from "@/Services/pages/test";


const ApiRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/services" element={<Services />} />
          <Route path="/choose/radio" element={<Radio />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    );
  };
  export default ApiRoute;