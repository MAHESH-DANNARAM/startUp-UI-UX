import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";

const Productsroutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products />} />
        </Routes>
    )
}
export default Productsroutes;