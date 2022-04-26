import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      

        <Routes>

        
          <Route element={<Register/>} path="/register"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
          <Route element ={<Login/>} path="/" />
         

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;