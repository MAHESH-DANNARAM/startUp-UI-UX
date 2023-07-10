import { Routes, Route } from "react-router-dom";
import Products from '../../pages/Products';
import Transcript from "../../pages/pages items/transcript";

const Productsroutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Products/>}>
                <Route index element={<Products/>}/>
                <Route path="/transcript" element={<Transcript />} />

            </Route>
        </Routes>
    )
}
export default Productsroutes;