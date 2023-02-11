
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './component/Trang chủ/Home';
import Business from './component/Business/Business';
import {Route, Routes } from 'react-router-dom';
import NotFound from './component/Layout/NotFound';
import BusinessDetail from './component/BusinessDetail/BusinessDetail';
import Album from './component/Album/Album';
import Medias from './component/Medias/Medias';
import MediasDetail from './component/Medias/MediasDetail/MediasDetail';
import AlbumDetail from './component/Album/content/AlbumDetail/AlbumDetail';
import Login from './Admin/pages/login/Login';
import Register from './Admin/pages/register/Register';
import Page404 from './Admin/pages/page404/Page404';
import Page500 from './Admin/pages/page500/Page500';
import Dashboard from './Admin/dashboard/Dashboard';
import Preferences from './Admin/Preferences/Preferences';
import React, { useState } from 'react';

function App() {

  return (

    <div className='wrapper'>
      <Routes>
        <Route path="/"> 
            <Route index element={<Home/>}/>
            <Route path="business" element={<Business/>}/>
            <Route path="album" element={<Album/>}/>
            <Route path="medias" element={<Medias/>}/>
            <Route path="business-detail/:id" element={<BusinessDetail/>}/>
            <Route path="album-detail/:id" element={<AlbumDetail/>}/>
            <Route path="medias-detail/:id" element={<MediasDetail/>}/>
            <Route path="*" name="Home" element={<Home/>}/>

              <Route exact path="/admin/login" name="Login Page" element={<Login />} />
              <Route exact path="/admin/register" name="Register Page" element={<Register />} />
              <Route exact path="/admin/404" name="Page 404" element={<Page404/>} />
              <Route exact path="/admin/500" name="Page 500" element={<Page500 />} />
              <Route exact path="/admin/dashboard" name="Dashboard" element={<Dashboard />} />
              <Route exact path="/admin/preferences" name ="Preferences" element={<Preferences/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
