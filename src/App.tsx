import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts';
import CompanySignup from './pages/CompanySignup';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/company/signup' element={<CompanySignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
