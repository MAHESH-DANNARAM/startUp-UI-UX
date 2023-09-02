import { Routes, Route } from "react-router-dom";
import Apitest from "@/APIs/test"
import Api from "@/APIs/Layout";


const ApiRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Api />}></Route>
        <Route path="/apitest" element={<Apitest/>}></Route>
      </Routes>
    );
  };
  export default ApiRoute;