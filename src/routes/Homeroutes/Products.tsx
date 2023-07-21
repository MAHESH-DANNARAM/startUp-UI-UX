import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Indexelement/Layout";
import Demo from "../../pages/Indexelement/Pages/Demo";
import Text_to_Image from "../../pages/Indexelement/Pages/Text_to_Image";
import Text_to_Voice from "../../pages/Indexelement/Pages/text_to_voice";

const Indexelement = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Demo />} />
          <Route path="/image" element={<Text_to_Image />} />
          <Route path="/text_to_voice" element={<Text_to_Voice />} />
        </Route>
      </Routes>
    )
}
export default Indexelement;