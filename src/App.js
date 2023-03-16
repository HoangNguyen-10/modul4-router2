import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Employee from './components/Employee';
import EmployeeDetail from './components/EmployeeDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/employeedetail' element={<EmployeeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
