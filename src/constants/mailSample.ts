import { getCookie } from '@/utils/cookie';

let str = `
  안녕하세요, [ 지원자 이름 ] 님.

  [ 병원 이름 ] 의 [ 공고이름/직무이름 ] 에 지원해주셔서 진심으로 감사합니다.
  
  보내주신 서류들을 검토한 결과 안타깝게도 [ 지원자 이름 ] 님이 탈락하게 되었습니다.

  우리 병원과 함께 할 가능성을 보여주신 것에 대해 다시 한번 감사드립니다.`;

let str2 = `
  안녕하세요, [ 지원자 이름 ] 님.

  [ 병원 이름 ] 의 [ 공고이름/직무이름 ] 에 지원해주셔서 진심으로 감사합니다.
  
  서류 합격을 진심으로 축하드립니다.

  면접 안내 드립니다.
  
  일시: [ 면접 날짜 ]

  장소: [ 면접 주소 ]

  면접과 관련하여 궁금한 사항이 있으시면
  
  해당 메일로 언제든 연락주시길 바랍니다.
  `;

export const mailSample = [
  { title: '[SAMPLE] 서류 탈락 문자 양식', content: str },
  { title: '[SAMPLE] 서류 통과 문자 양식', content: str2 },
];

export const getMailSample = ({
  applicantName,
  mailType,
  jobpostTitle,
}: {
  applicantName: string;
  mailType: mailTypeCase;
  jobpostTitle: string;
}) => {
  const companyName = getCookie('companyName') || '메디매치';

  switch (mailType) {
    case '기본':
      return ``;
    case '서류합격':
      return `
      <p>안녕하세요, ${applicantName}님.</p>
      <p><br></p>
      <p>${companyName}의 ${jobpostTitle} 전형에 관심 갖고, 지원해주셔서 감사드립니다.</p>
      <p>${applicantName} 께서 정성스럽게 작성해주신 이력서를 보니, 꼭 만나뵙고 싶다는 생각이 들었습니다.</p>
      <p><br></p>
      <p>면접 안내 사항 정리하여 전달 드립니다.</p>
      <p>- 면접 일시 :</p>
      <p>- 면접 장소 :</p>
      <p>- 소요 시간 :</p>
      <p><br></p>
      <p>궁금한 사항은 본 메일을 통해 문의 바랍니다. 감사합니다.</p>`;
    case '서류불합격':
      return `
      <p>안녕하세요, ${applicantName}님. </p><p><br></p><p>${companyName}의 ${jobpostTitle} 전형에 지원해주셔서 진심으로 감사합니다. </p><p><br></p><p>보내주신 서류들을 검토한 결과 안타깝게도 ${applicantName}님이 탈락하게 되었습니다. </p><p><br></p><p>우리 병원과 함께 할 가능성을 보여주신 것에 대해 다시 한번 감사드립니다.</p>`;
    case '면접합격':
      return `
      <p>안녕하세요, ${applicantName}님.</p>
      <p><br></p>
      <p>${companyName}의 ${jobpostTitle} 전형에 관심 갖고, 지원해주셔서 감사드립니다.</p>
      <p>${applicantName}님이 보유하신 역량과 경험들이 저희 병원에 큰 도움이 될 것 같아 아래와 같이 제안 드립니다.</p>
      <p><br></p>
      <p>입사시 처우</p>
      <p>- 포지션 :</p>
      <p>- 계약 연봉 :</p>
      <p>- 근무 형태 :</p>
      <p>- 입사일 :</p>
      <p><br></p>
      <p>저희 ${companyName}에서 ${applicantName}님과 함께, 즐겁게 일할 수 있기를 기대합니다.</p>
      <p><br></p>
      <p>제안 사항 확인 후 회신 부탁드립니다.</p>
      <p>궁금한 사항이 있으시면 편하게 연락주세요. 감사합니다.</p>`;
    case '면접불합격':
      return `
      <p>안녕하세요, ${applicantName}님.</p>
      <p><br></p>
      <p>${companyName}의 ${jobpostTitle} 전형에 관심 갖고, 지원해주셔서 감사드립니다.</p>
      <p><br></p>
      <p>${applicantName} 님께서 그간 걸어온 길을 꼼꼼히 검토해보았습니다만, 아쉽게도 이번에는 합격 소식을 전해드리지 못하게 되었습니다.</p>
      <p><br></p>
      <p>많은 시간과 노력을 들여주셨음에도 아쉬운 결과를 전달드리게 되어 죄송하다는 말씀 드립니다.</p> 
      <p><br></p>
      <p>비록 이번 기회에는 ${applicantName}님과 함께 하지 못하지만, 향후 또 다른 기회로 만나 뵙기를 희망합니다.</p>
      <p><br></p>
      <p>앞으로 ${applicantName}님의 앞날에 빛나는 일만 가득하시기를 진심으로 기원합니다.</p>
      <p><br></p>
      <p>감사합니다.</p>`;
  }
};
