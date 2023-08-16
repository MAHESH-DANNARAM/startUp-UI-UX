import { Routes, Route } from "react-router-dom";
import Layout from "@/APIs/Api";


const AboutRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    );
  };
  export default AboutRoute;