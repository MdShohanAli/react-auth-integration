
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Login from './Component/LogIn/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} > Home </Route>
        <Route path="login" element={<Login></Login>} > Home </Route>
        <Route path='register' element={<Register></Register>}>Register</Route>
      </Routes>

    </div>
  );
}

export default App;
