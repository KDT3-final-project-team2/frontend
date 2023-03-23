import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import ApplicantSignUp from './pages/ApplicantSignUp';
import CompanySignUp from './pages/CompanySignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/applicant/signup' element={<ApplicantSignUp />} />
        <Route path='/company/signup' element={<CompanySignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
