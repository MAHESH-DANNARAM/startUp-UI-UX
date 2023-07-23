import { Routes, Route } from "react-router-dom";
import Layout from "../../pages/Indexelement/Layout";
import Demo from "../../pages/Indexelement/Pages/demo/Demo";
import Text_to_Image from "../../pages/Indexelement/Pages/image/Text_to_Image";
import Text_to_Voice from "../../pages/Indexelement/Pages/voice/text_to_voice";
// import Model from "../../pages/Indexelement/Pages/image/model";
// import Chart_model from "../../pages/Indexelement/Pages/chart/chart_model";
import Text_to_chart from '../../pages/Indexelement/Pages/chart/Text_to_chart';
import Text_to_3d from '../../pages/Indexelement/Pages/3d_object/Text_to_3d';
// import d3_model from "../../pages/Indexelement/Pages/3d_object/3d_model";
import Ann from "../../pages/Indexelement/ann"

const Indexelement = () => {
    return(
        <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<Demo />} /> */}
          <Route path="/image" element={<Text_to_Image />} />
          {/* <Route path="/model" element={<Model/>} /> */}
          <Route path="/voice" element={<Text_to_Voice/>} />
          <Route path="/chart" element={<Text_to_chart/>} />
          <Route path="/3d" element={<Text_to_3d/>} />
          <Route path="/a" element={<Ann/>} />



        </Route>
      </Routes>
    )
}
export default Indexelement;