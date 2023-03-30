import './App.css';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Employee from './components/Employee';
import EmployeeDetail from './components/EmployeeDetail';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/employeedetail' element={<EmployeeDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
