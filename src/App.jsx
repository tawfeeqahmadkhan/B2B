import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FirstPage from "./components/FirstPage"
import VendorForm from "./components/loginForms/VendorForm"
import './App.css'
import './index.css'
import SupplierForm from "./components/loginForms/SupplierForm"
import VendorDashboard from "./components/vendor/VendorDashboard"
import SupplierDashboard from "./components/supplier/SupplierDashboard"
function App() {
  return (
<>

<BrowserRouter>
   <Routes>
    <Route path="/"  element={<FirstPage/>}/>
    <Route path="/vendor/signup"  element={<VendorForm/>}/>
    <Route path="/supplier/signup"  element={<SupplierForm/>}/>
    <Route path="/home/vendor"  element={<VendorDashboard/>}/>
    <Route path="/home/supplier"  element={<SupplierDashboard/>}/>
   </Routes>
   </BrowserRouter>
</>
  )
}

export default App
