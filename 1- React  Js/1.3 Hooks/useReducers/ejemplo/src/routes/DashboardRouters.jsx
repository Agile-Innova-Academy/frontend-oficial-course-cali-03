import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import Counter from '../components/Counter';
import NavBars from '../components/NavBars';

const DashboardRouters = () => {
  return (
    <>
    <NavBars/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
      </Routes>
    </>
  );
}

export default DashboardRouters
