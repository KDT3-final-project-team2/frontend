import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import ApplicantSignUp from './pages/ApplicantSignUp';
import CompanySignUp from './pages/CompanySignUp';
import CompanyMain from './pages/company/CompanyMain';
import ApplicantMain from './pages/applicant/ApplicantMain';
import AdminMain from './pages/AdminMain';
import Loading from './components/common/Loading';
import CompanyApplicant from './pages/company/CompanyApplicant';
import CompanyJobPosting from './pages/company/CompanyJobPosting';
import CompanyContract from './pages/company/CompanyContract';
import ApplicantResume from './pages/applicant/ApplicantResume';
import ApplicantMyInfo from './pages/applicant/ApplicantMyInfo';
import ApplicantJobSearching from './pages/applicant/ApplicantJobSearching';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Loading />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='login' element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path='applicant/signup' element={<ApplicantSignUp />} />
          <Route path='company/signup' element={<CompanySignUp />} />
          <Route path='company'>
            <Route path='' element={<CompanyMain />} />
            <Route path='applicant' element={<CompanyApplicant />} />
            <Route path='jobposting' element={<CompanyJobPosting />} />
            <Route path='contract' element={<CompanyContract />} />
          </Route>
          <Route path='applicant'>
            <Route path='' element={<ApplicantMain />} />
            <Route path='jobsearching' element={<ApplicantJobSearching />} />
            <Route path='resume' element={<ApplicantResume />} />
            <Route path='myinfo' element={<ApplicantMyInfo />} />
          </Route>
          <Route path='admin' element={<AdminMain />} /> // admin관련 페이지들은 루트 경로 보호예정
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
