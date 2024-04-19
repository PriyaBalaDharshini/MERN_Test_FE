import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import CreateEmployee from './components/create-employee/CreateEmployee'
import EmployeeList from './components/employee-list/EmployeeList'
import EditEmployee from './components/edit-employee/EditEmployee'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='/' element={<Admin />} />
          <Route path='/create' element={<CreateEmployee />} />
          <Route path='/all' element={<EmployeeList />} />
          <Route path='/update/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App