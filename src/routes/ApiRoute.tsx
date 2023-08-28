import { Routes, Route } from "react-router-dom";
import Api from "@/APIs/Api";


const ApiRoute = () => {
    return (
      <Routes>
        <Route path="/" element={<Api />}></Route>
      </Routes>
    );
  };
  export default ApiRoute;