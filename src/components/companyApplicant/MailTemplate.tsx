import { useState } from 'react';
import { Inner, NoList } from './ApplicantsInfo';
import { mailSample } from '../../constants/mailSample';
import MailList from './MailList';
import styled from 'styled-components';
import MailTemplateModal from './MailTemplateModal';

const MailTemplate = () => {
  const [open, setOpen] = useState(false);
  const [templateModal, setTemplateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [buttonTitle, setButtonTitle] = useState('');

  return (
    <TabContainer>
      <button
        className='button'
        onClick={() => {
          setTitle('새 템플릿');
          setButtonTitle('저장');
          setTemplateModal(true);
        }}
      >
        새템플릿
      </button>
      <Inner>
        {Array.isArray(mailSample) ? (
          mailSample.map((item: any, idx: number) => {
            return <MailList item={item} key={idx} />;
          })
        ) : (
          <NoList>아직 지원한 지원자가 없습니다.</NoList>
        )}
      </Inner>
      {templateModal ? (
        <MailTemplateModal setTemplateModal={setTemplateModal} title={title} buttonTitle={buttonTitle} />
      ) : null}
    </TabContainer>
  );
};

export const TabContainer = styled.div`
  display: flex;
  flex-flow: column;
  .button {
    width: 140px;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
    margin-left: auto;
    background-color: var(--color-primary-100);
    color: #fff;
    font-weight: bold;
    line-height: 39px;
  }
`;

export default MailTemplate;
