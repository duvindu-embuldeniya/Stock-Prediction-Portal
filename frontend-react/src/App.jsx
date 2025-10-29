import './assets/css/style.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';

function App() {

  return (
    <>
      <BrowserRouter >
       <HeaderComponent />
        <Routes>

            <Route path='/' element={<MainComponent />} />

            <Route path='/register' element={<RegisterComponent />} />

            <Route path='/login' element={<LoginComponent />} />

        </Routes>
       <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
