import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Indexelement/Layout";
import Products from "../../pages/Indexelement/Pages/Demo";
import Text_to_Image from "../../pages/Indexelement/Pages/Text_to_Image";

const Indexelement = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/text_to_image" element={<Text_to_Image />} />
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} /> */}
      </Routes>
    )
}
export default Indexelement;