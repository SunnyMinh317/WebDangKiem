import logo from './logo.svg';
import './App.css';
import HeaderAdmin from './components/HeaderAdmin.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DSXe from './pages/admin/DSXe';
import DSTrungTam from './pages/admin/DSTrungTam';
import CapTaiKhoan from './pages/admin/CapTaiKhoan';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/danhsachxe' element={<DSXe/>}/>
        <Route path='/danhsachtrungtam' element={<DSTrungTam/>}/>
        <Route path='/captaikhoan' element={<CapTaiKhoan/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
