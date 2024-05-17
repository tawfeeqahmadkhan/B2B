import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FirstPage from "./components/FirstPage"
import VendorForm from "./components/loginForms/VendorForm"
import './App.css'
import './index.css'
import SupplierForm from "./components/loginForms/SupplierForm"
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<FirstPage/>}/>
    <Route path="/vendor/signup"  element={<VendorForm/>}/>
    <Route path="/supplier/signup"  element={<SupplierForm/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
