import React from 'react'
import "./App.css"
import AddEmployee from './pages/AddEmployee/AddEmployee'
import Dashboard from './pages/Dashboard/Dashboard'
import PayrollDetails from './pages/PayrollDetails/PayrollDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/payroll-details" element={<PayrollDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App