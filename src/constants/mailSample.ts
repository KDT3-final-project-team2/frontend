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
