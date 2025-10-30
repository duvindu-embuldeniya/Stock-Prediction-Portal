import './assets/css/style.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import AuthContextComponent from './components/AuthContextComponent/AuthContextComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import PrivateRoutesComponent from './components/PrivateRoutesComponent/PrivateRoutesComponent';
import PublicRoutesComponent from './components/PublicRoutesComponent/PublicRoutesComponent';


function App() {

  return (
    <>
      <AuthContextComponent>
        <BrowserRouter >
        <HeaderComponent />
          <Routes>

              <Route path='/' element={<MainComponent />} />

              <Route path='/register' element={<PublicRoutesComponent> <RegisterComponent /> </PublicRoutesComponent>} />

              <Route path='/login' element={<PublicRoutesComponent> <LoginComponent /> </PublicRoutesComponent>} />

              <Route path='/dashboard' element={<PrivateRoutesComponent> <DashboardComponent /> </PrivateRoutesComponent>} />


          </Routes>
        <FooterComponent />
        </BrowserRouter>
      </AuthContextComponent>
    </>
  )
}

export default App
