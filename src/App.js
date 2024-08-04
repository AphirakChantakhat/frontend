import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginRegister from './LoginRegister';
import "./style.scss"
import Home from './Home';
import Dashbord from './Dashbord';
//import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginRegister/>}></Route>
<<<<<<< HEAD
        {/* <Route path='/register' element={<LoginRegister/>}></Route> */}
=======
        <Route path='/register' element={<LoginRegister/>}></Route>
>>>>>>> 704a6d5ac23ea8a4ff7e8361f366f67fec6b26a8
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashbord' element={<Dashbord/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
