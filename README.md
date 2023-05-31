<div align='center'>
<h2> 👩‍⚕️ 병의원 채용프로세스 관리 서비스, 메디매치 👨‍⚕️</h2>
<img src='public/images/표지.jpg'>

</div>

## 💻 배포 사이트 테스트 정보
- 병원회원 로그인
    - 아이디: nike99@naver.com
    - 비밀번호: qwer1234
- 개인회원 로그인   
    - 아이디: nike1@naver.com
    - 비밀번호: qwer1234 
- 슈퍼관리자 로그인
    - **먼저, https://medimatch.netlify.app/admin/login 으로 이동**
        - 아이디: admin@admin.com
        - 비밀번호: admin1234

## 👩‍💻 FE.member

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/hae9">
              <img src="https://avatars.githubusercontent.com/u/108416023?v=4" width="200">
              <br />
              <b>hae9</b>
            </a>
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/1myeji">
              <img src="https://avatars.githubusercontent.com/u/106291546?v=4" width="200">
              <br />
              <b>1myeji</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/ddoyun">
              <img src="https://avatars.githubusercontent.com/u/46959186?v=4" width="200" >
              <br />
              <b>ddoyun</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td>
             💚 강해경 💚   <br/>
             FE
      </td>
        <td>
            💗 임예지 💗 <br/>
             FE
        </td>
        <td>
            🧡 전소윤 🧡<br/>
             FE
    </tr>
</table>

## ⚒️ 기술 스택

```
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.9.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.0",
    "styled-components": "^5.3.9",
    "@reduxjs/toolkit": "^1.9.3",
    "react-redux": "^8.0.5",
    "redux-persist": "^6.0.0",
    "@tanstack/react-query": "^4.28.0",
    "react-hook-form": "^7.43.7",
    "yup": "^1.0.2",
    "react-calendar": "4.0",
    "amazing-react-charts": "^0.7.1",
    "vite-plugin-svgr": "^2.4.0",
    "react-pdf": "^6.2.2",
    "react-quill": "^2.0.0",
```

---

## 📁 폴더 구조

```📦src
 ┣ 📂@types
 ┃ ┣ 📜data.d.ts
 ┃ ┗ 📜props.d.ts
 ┣ 📂api
 ┃ ┣ 📜adminApi.ts
 ┃ ┣ 📜applicantApi.ts
 ┃ ┣ 📜commonApi.ts
 ┃ ┣ 📜companyApi.ts
 ┃ ┗ 📜instance.ts
 ┣ 📂assets
 ┃ ┗ 📂fonts
 ┃ ┃ ┣ 📜LINESeedKR-Bd.eot
 ┃ ┃ ┣ 📜LINESeedKR-Bd.ttf
 ┃ ┃ ┣ 📜LINESeedKR-Bd.woff
 ┃ ┃ ┣ 📜LINESeedKR-Bd.woff2
 ┃ ┃ ┣ 📜LINESeedKR-Rg.eot
 ┃ ┃ ┣ 📜LINESeedKR-Rg.ttf
 ┃ ┃ ┣ 📜LINESeedKR-Rg.woff
 ┃ ┃ ┣ 📜LINESeedKR-Rg.woff2
 ┃ ┃ ┣ 📜LINESeedKR-Th.eot
 ┃ ┃ ┣ 📜LINESeedKR-Th.ttf
 ┃ ┃ ┣ 📜LINESeedKR-Th.woff
 ┃ ┃ ┗ 📜LINESeedKR-Th.woff2
 ┣ 📂components
 ┃ ┣ 📂applicantJobSearching
 ┃ ┃ ┗ 📜JobSearchingList.tsx
 ┃ ┣ 📂applicantResume
 ┃ ┃ ┣ 📂pdf
 ┃ ┃ ┃ ┗ 📜ViewPDF.tsx
 ┃ ┃ ┣ 📜ResumeList.tsx
 ┃ ┃ ┗ 📜ResumeModal.tsx
 ┃ ┣ 📂calendar
 ┃ ┃ ┣ 📜CalendarUI.styles.ts
 ┃ ┃ ┣ 📜CalendarUI.tsx
 ┃ ┃ ┣ 📜ScheduleElement.tsx
 ┃ ┃ ┗ 📜UserProfile.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AlertModal.tsx
 ┃ ┃ ┣ 📜ConfirmModal.tsx
 ┃ ┃ ┣ 📜DropDown.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┣ 📜SelectBox.tsx
 ┃ ┃ ┗ 📜WebEditor.tsx
 ┃ ┣ 📂companyApplicant
 ┃ ┃ ┣ 📜ApplicantsInfo.tsx
 ┃ ┃ ┣ 📜ApplicantsList.tsx
 ┃ ┃ ┣ 📜ApplicantsRecommend.tsx
 ┃ ┃ ┣ 📜ApplicantsStats.tsx
 ┃ ┃ ┣ 📜MailList.tsx
 ┃ ┃ ┣ 📜MailTemplate.tsx
 ┃ ┃ ┗ 📜MailTemplateModal.tsx
 ┃ ┣ 📂companyjobposting
 ┃ ┃ ┣ 📜InputBox.tsx
 ┃ ┃ ┣ 📜JobPostingList.tsx
 ┃ ┃ ┣ 📜PostEditModal.tsx
 ┃ ┃ ┣ 📜PreviewModal.tsx
 ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜LeftBar.tsx
 ┃ ┃ ┗ 📜RightBar.tsx
 ┃ ┣ 📂mainhome
 ┃ ┃ ┣ 📜ApplicantList.tsx
 ┃ ┃ ┣ 📜ApplicantStepBox.tsx
 ┃ ┃ ┣ 📜CompanyStepBox.tsx
 ┃ ┃ ┣ 📜EmailModal.tsx
 ┃ ┃ ┣ 📜JobList.tsx
 ┃ ┃ ┣ 📜NewUsersBox.tsx
 ┃ ┃ ┣ 📜PlanUserBox.tsx
 ┃ ┃ ┗ 📜UserStaticsBox.tsx
 ┃ ┣ 📂member
 ┃ ┃ ┗ 📜UserList.tsx
 ┃ ┣ 📂setting
 ┃ ┃ ┣ 📂applicant
 ┃ ┃ ┃ ┣ 📜Info.tsx
 ┃ ┃ ┃ ┗ 📜Withdrawal.tsx
 ┃ ┃ ┗ 📂company
 ┃ ┃ ┃ ┣ 📜Info.tsx
 ┃ ┃ ┃ ┣ 📜PlanPrice.tsx
 ┃ ┃ ┃ ┗ 📜Withdrawal.tsx
 ┃ ┣ 📂signup
 ┃ ┃ ┣ 📜ApplicantSignUpForm.tsx
 ┃ ┃ ┣ 📜CheckBox.tsx
 ┃ ┃ ┣ 📜CompanySignUpForm.tsx
 ┃ ┃ ┣ 📜SignUpPaginationButton.tsx
 ┃ ┃ ┣ 📜SignUpStepCheck.tsx
 ┃ ┃ ┣ 📜SignUpTitle.tsx
 ┃ ┃ ┣ 📜Step1.tsx
 ┃ ┃ ┣ 📜Step2.tsx
 ┃ ┃ ┗ 📜Step3.tsx
 ┃ ┗ 📂term.tsx
 ┃ ┃ ┣ 📜TermList.tsx
 ┃ ┃ ┗ 📜TermPostEditModal.tsx
 ┣ 📂constants
 ┃ ┣ 📜dayOfWeek.ts
 ┃ ┣ 📜jobPostingOptions.ts
 ┃ ┣ 📜mailSample.ts
 ┃ ┣ 📜navigation.ts
 ┃ ┣ 📜PlanUsers.ts
 ┃ ┣ 📜signupInput.ts
 ┃ ┣ 📜steps.ts
 ┃ ┣ 📜termExample.ts
 ┃ ┣ 📜terms.ts
 ┃ ┗ 📜termsOptions.ts
 ┣ 📂hooks
 ┃ ┗ 📜useDispatchHooks.ts
 ┣ 📂lotties
 ┃ ┗ 📜loading.json
 ┣ 📂pages
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📜AdminLogin.tsx
 ┃ ┃ ┣ 📜AdminMain.tsx
 ┃ ┃ ┣ 📜AdminMember.tsx
 ┃ ┃ ┣ 📜AdminSetting.tsx
 ┃ ┃ ┗ 📜AdminTerm.tsx
 ┃ ┣ 📂applicant
 ┃ ┃ ┣ 📜ApplicantJobSearching.tsx
 ┃ ┃ ┣ 📜ApplicantMain.tsx
 ┃ ┃ ┣ 📜ApplicantResume.tsx
 ┃ ┃ ┗ 📜ApplicantSetting.tsx
 ┃ ┣ 📂company
 ┃ ┃ ┣ 📜CompanyApplicant.tsx
 ┃ ┃ ┣ 📜CompanyJobPosting.tsx
 ┃ ┃ ┣ 📜CompanyMain.tsx
 ┃ ┃ ┣ 📜CompanySetting.tsx
 ┃ ┃ ┗ 📜CompanyTerm.tsx
 ┃ ┣ 📜ApplicantSignUp.tsx
 ┃ ┣ 📜Calendar.tsx
 ┃ ┣ 📜CompanySignUp.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂store
 ┃ ┣ 📜applicantUserSlice.ts
 ┃ ┣ 📜companyUserSlice.ts
 ┃ ┣ 📜loadingSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂style
 ┃ ┣ 📜font.css
 ┃ ┗ 📜globalStyle.ts
 ┣ 📂utils
 ┃ ┣ 📜cookie.ts
 ┃ ┣ 📜dateToSTring.ts
 ┃ ┣ 📜getDday.ts
 ┃ ┣ 📜getHtmlToText.ts
 ┃ ┣ 📜getToday.ts
 ┃ ┣ 📜jwtCheck.ts
 ┃ ┣ 📜optionChangeToEnglish.ts
 ┃ ┣ 📜termChangeToEnglish.ts
 ┃ ┗ 📜validationSchema.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
