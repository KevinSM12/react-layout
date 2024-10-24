import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Picture from "./pages/picture";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="about"element={(<About />)} />
          <Route path="picture"element={(<Picture />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);