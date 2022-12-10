import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import ChooseUser from './components/ChooseUser';
import RegisterTab from './components/RegisterTab';
import UploadPicture from './components/UploadPicture';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup'
import HomePage from "./components/Home";
import ChefHomePage from "./components/ChefHomePage";
import AddProduct from "./components/AddProduct";
import SearchPage from './components/Search'
import NotificationsPage from './components/Notifications';
import ChefNotificationsPage from './components/ChefNotifications';
import ShipperNotificationsPage from './components/ShipperNotifications';
import ShipperProfilePage from './components/ShipperProfile';
import ChefProfilePage from './components/ChefProfile';
import ProfilePage from './components/Profile';
import ChatPage from './components/Chat';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter,Routes , Route } from 'react-router-dom';
import {useSelector     } from 'react-redux'

 function App() { 
  const {userType}=useSelector((state)=>state.userType);

  return (
    < >
     <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Main/>} >

  <Route path='/home' element={userType=="client"?<HomePage/>:<ChefHomePage/>} />
 <Route path='/search' element={<SearchPage/>} />
 <Route path='/addProduct' element={<AddProduct/>} />
 <Route path='/notifications' element={userType=="chef"?<ChefNotificationsPage/>:<ShipperNotificationsPage/>} />
 <Route path='/orders' element={<NotificationsPage/>} />
 <Route path='/profileClient' element={<ProfilePage/>} />
 <Route path='/profileWorker' element={userType=="chef"?<ChefProfilePage/>:<ShipperProfilePage/>} />
 <Route path='/chat' element={<ChatPage/>} />
 <Route path='/productDetails' element={<ProductDetails/>} />

     </Route>
    <Route path='/welcome' element={<Welcome/>} />
    <Route path='/chooseAccount' element={<ChooseUser/>} />
    <Route path='/uploadPicture' element={<UploadPicture/>} />
      <Route  path='registration' element={<RegisterTab/>} >
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} /> 
      </Route>
    
    </Routes>
    </BrowserRouter>
      
    </ >
  );
}

export default App;
