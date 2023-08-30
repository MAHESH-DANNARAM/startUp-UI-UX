import {Routes, Route} from 'react-router-dom'
import "@/assets/frontend/css/style1.css"
// import "@/assets/frontend/css/additional-styles/range-slider.css"
// import "@/assets/frontend/css/additional-styles/theme.css"
// import "@/assets/frontend/css/additional-styles/toggle-switch.css"
// import "@/assets/frontend/css/additional-styles/utility-patterns.css"
import Home from '@/frontend/pages/Home'
import Pricing from '@/frontend/pages/Pricing'
import Test from '@/frontend/pages/test'
import Login from '@/frontend/Login Details/Login'
import Register from '@/frontend/Login Details/Register'
import Forgot from '@/frontend/Login Details/Forgot'
import Verify from "@/frontend/Login Details/Verification"
import CreatePw from '@/frontend/Login Details/CreatePw'

const FrontendRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>
        </Route> 
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/createpw" element={<CreatePw />} />
        <Route path="/test" element={<Test />} />
    </Routes>
  )
}
export default FrontendRoute