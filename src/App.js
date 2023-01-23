import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './Components/Content';
import HeroSection from './Components/HeroSection';
import {Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Addshop from './Components/Addshop'
import LandingPage from './Components/LandingPage';
import {LoginNav} from './Components/Nav';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />

      <Route path="/dashboard"
        element={
          <div className='App'>
            <LoginNav />
            <HeroSection />
            <Content />
          </div>}
      />

      <Route path='/dashboard/addShop' element={<Addshop/>}/>    
      {/* <Route path='/dashboard/editShop' element={<Editshop/>}/>     */}
    </Routes>
  );
}

export default App;
