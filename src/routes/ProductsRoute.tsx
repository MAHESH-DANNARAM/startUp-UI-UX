import { Routes, Route } from "react-router-dom";
import Layout from "@/Products/Layout";
import Text_to_3d from "@/Products/Pages/3d_object/Text_to_3d";
import Text_to_chart from "@/Products/Pages/chart/Text_to_chart";
import Chart from "@/Products/Pages/chart/chart";
import Text_to_Image from "@/Products/Pages/image/Text_to_Image";
import Music from "@/Products/Pages/music/music";
import Text_to_Voice from "@/Products/Pages/voice/text_to_voice";
import Ann from "@/Products/ann";

const Product = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
         {/* <Route index element={<Demo />} /> */}
         <Route path="/image" element={<Text_to_Image />} />
          {/* <Route path="/model" element={<Model/>} /> */}
          <Route path="/voice" element={<Text_to_Voice/>} />
          <Route path="/chart" element={<Text_to_chart/>} />
          <Route path="/3d" element={<Text_to_3d/>} />
          <Route path="/a" element={<Ann/>} />
          <Route path="/chart1" element={<Chart/>} />
          <Route path="/music" element={<Music />} />
        </Route>
    </Routes>
  );
};
export default Product;
