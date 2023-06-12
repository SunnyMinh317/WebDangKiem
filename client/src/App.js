import React from 'react';
import './App.css';
import Login from './pages/Login';
import DSXe from './pages/admin/DSXe';
import DSTrungTam from './pages/admin/DSTrungTam';
import CapTaiKhoan from './pages/admin/CapTaiKhoan';
import CenterDSXe from './pages/center/CenterDSXe';
import AddCar from './pages/center/AddCar';
// import HomePage from './pages/HomePage';
import CentreHomePage from './pages/CentreHomePage';
import AdminHomePage from './pages/AdminHomePage';
import AdminPrediction from './pages/admin/AdminPrediction';
import AdminRegisHistory from './pages/admin/AdminRegisHistory';
import CentrePrediction from './pages/center/CentrePrediction';
import CentreRegisHistory from './pages/center/CentreRegisHistory';
import Profile from './pages/center/Profile';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Layout = ()=>{
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      //! Admin routes
      {
        path: '/adminHome',
         element: <AdminHomePage/>
      },
      {
        path: '/danhsachxe',
         element: <DSXe/>,
      },
      {
        path: '/danhsachtrungtam',
         element: <DSTrungTam/>,

      },
      {
        path: '/lsdkcuc',
         element: <AdminRegisHistory/>,

      },
      {
        path: '/captaikhoan',
         element: <CapTaiKhoan/>,
      },
      {
        path: '/dubaocuc',
        element: <AdminPrediction/>
      },
      //!Centre routes
      {
        path: '/centreHome',
        element: <CentreHomePage/>
      },
      {
        path: '/dsxetrungtam',
        element: <CenterDSXe/>
      },
      {
        path: '/themxe',
        element: <AddCar/>
      },
      {
        path: '/dubaotrungtam',
        element: <CentrePrediction/>
      },
      {
        path: '/lsdktrungtam',
        element: <CentreRegisHistory/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
])

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route index element={<HomePage/>}/>   */}
    //     <Route path='/adminHome' element={<AdminHomePage/>}/>
    //     <Route path='/centreHome' element={<CentreHomePage/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/danhsachxe' element={<DSXe/>}/>
    //     <Route path='/danhsachtrungtam' element={<DSTrungTam/>}/>
    //     <Route path='/captaikhoan' element={<CapTaiKhoan/>}/>
    //     <Route path='/dsxetrungtam' element={<CenterDSXe/>}/>
    //     <Route path='/themxe' element={<AddCar/>}/>
    //     <Route path='/dubao' element={<Dashboard/>}/>
    //     <Route path='/profile' element={<Profile/>}/>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

export default App;
