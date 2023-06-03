import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DSXe from './pages/admin/DSXe';
import DSTrungTam from './pages/admin/DSTrungTam';
import CapTaiKhoan from './pages/admin/CapTaiKhoan';
import CenterDSXe from './pages/center/CenterDSXe';
import AddCar from './pages/center/AddCar';
// import HomePage from './pages/HomePage';
import CentreHomePage from './pages/CentreHomePage';
import AdminHomePage from './pages/AdminHomePage';
import Dashboard from './pages/prediction/Dashboard';
import Profile from './pages/center/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage/>}/>   */}
        <Route path='/adminHome' element={<AdminHomePage/>}/>
        <Route path='/centreHome' element={<CentreHomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/danhsachxe' element={<DSXe/>}/>
        <Route path='/danhsachtrungtam' element={<DSTrungTam/>}/>
        <Route path='/captaikhoan' element={<CapTaiKhoan/>}/>
        <Route path='/dsxetrungtam' element={<CenterDSXe/>}/>
        <Route path='/themxe' element={<AddCar/>}/>
        <Route path='/dubao' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
