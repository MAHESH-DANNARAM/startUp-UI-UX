import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";

const Productsroutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}>
               

            </Route>
        </Routes>
    )
}
export default Productsroutes;