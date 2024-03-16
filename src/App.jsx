import React from 'react'
import "./App.css"
import AddEmployee from './pages/AddEmployee/AddEmployee'
import Dashboard from './pages/Dashboard/Dashboard'
import PayrollDetails from './pages/PayrollDetails/PayrollDetails'
import { HashRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/payroll-details" element={<PayrollDetails />} />
      </Routes>
    </HashRouter>
  )
}

export default App