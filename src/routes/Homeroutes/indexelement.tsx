import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Indexelement/Layout";
import Products from "../../pages/Indexelement/Pages/Products";

const Indexelement = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} /> */}
      </Routes>
    )
}
export default Indexelement;