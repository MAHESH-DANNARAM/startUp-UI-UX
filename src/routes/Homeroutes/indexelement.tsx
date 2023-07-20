import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Indexelement/Layout";
import Products from "../../pages/Indexelement/Pages/Products";
import Text_to_Voice from "../../pages/Indexelement/Pages/text_to_voice";
const Indexelement = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Text_to_Voice />} />
        </Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} /> */}
      </Routes>
    )
}
export default Indexelement;