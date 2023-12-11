import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import Layout from './layout/layout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
