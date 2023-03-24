import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import ApplicantSignUp from './pages/ApplicantSignUp';
import CompanySignUp from './pages/CompanySignUp';
import CompanyMain from './pages/CompanyMain';
import ApplicantMain from './pages/ApplicantMain';
import AdminMain from './pages/AdminMain';
import Loading from './components/common/Loading';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Loading />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path='/company/signup' element={<CompanySignUp />} />
          <Route path='/applicant/signup' element={<ApplicantSignUp />} />
          <Route path='/company' element={<CompanyMain />} />
          <Route path='/applicant' element={<ApplicantMain />} />
          <Route path='/admin' element={<AdminMain />} /> // admin관련 페이지들은 루트 경로 보호예정
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
