import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts';
import GlobalStyle from './style/globalStyle';
import Home from './pages/Home';
import Login from './pages/Login';
import ApplicantSignUp from './pages/ApplicantSignUp';
import CompanySignUp from './pages/CompanySignUp';
import CompanyMain from './pages/company/CompanyMain';
import ApplicantMain from './pages/applicant/ApplicantMain';
import AdminMain from './pages/admin/AdminMain';
import AdminLogin from './pages/admin/AdminLogin';
import AdminMember from './pages/admin/AdminMember';
import AdminTerm from './pages/admin/AdminTerm';
import AdminSetting from './pages/admin/AdminSetting';
import Loading from './components/common/Loading';
import CompanyApplicant from './pages/company/CompanyApplicant';
import CompanyJobPosting from './pages/company/CompanyJobPosting';
import CompanySetting from './pages/company/CompanySetting';
import ApplicantResume from './pages/applicant/ApplicantResume';
import ApplicantSetting from './pages/applicant/ApplicantSetting';
import ApplicantJobSearching from './pages/applicant/ApplicantJobSearching';
import CompanyTerm from './pages/company/CompanyTerm';

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
            <Route path='term' element={<CompanyTerm />} />
            <Route path='setting' element={<CompanySetting />} />
          </Route>
          <Route path='applicant'>
            <Route path='' element={<ApplicantMain />} />
            <Route path='jobsearching' element={<ApplicantJobSearching />} />
            <Route path='resume' element={<ApplicantResume />} />
            <Route path='setting' element={<ApplicantSetting />} />
          </Route>
          <Route path='admin'>
            <Route path='' element={<AdminMain />} /> // admin관련 페이지들은 루트 경로 보호예정
            <Route path='login' element={<AdminLogin />} />
            <Route path='member' element={<AdminMember />} />
            <Route path='term' element={<AdminTerm />} />
            <Route path='setting' element={<AdminSetting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
