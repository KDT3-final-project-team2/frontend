import { useState } from 'react';
import styled from 'styled-components';
import MailTemplateModal from './MailTemplateModal';

const MailList = ({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);
  const [templateModal, setTemplateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [buttonTitle, setButtonTitle] = useState('');

  return (
    <List open={open}>
      <Inner onClick={() => setOpen(!open)} open={open}>
        <p className='name'>{item.title}</p>
        <div className='last'>
          <button
            onClick={event => {
              event.stopPropagation();
              setTitle('메일 템플릿 수정');
              setButtonTitle('수정완료');
              setTemplateModal(true);
            }}
          >
            <img src='/icons/modify.svg' alt='수정' width='16px' height='16px' />
          </button>
          <button
            onClick={event => {
              event.stopPropagation();
              console.log('삭제');
            }}
          >
            <img src='/icons/delete.svg' alt='삭제' width='18px' height='18px' />
          </button>
        </div>
      </Inner>
      {templateModal ? (
        <MailTemplateModal setTemplateModal={setTemplateModal} title={title} buttonTitle={buttonTitle} />
      ) : null}
      {open ? (
        <HideContent>
          <MailSample>
            <h2>메일 양식</h2>
            <div>
              <pre>{item.content}</pre>
            </div>
          </MailSample>
        </HideContent>
      ) : null}
    </List>
  );
};

const List = styled.div`
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 20px;
  align-items: center;
  margin-bottom: 18px;
  gap: 30px;
  height: ${({ open }: { open: boolean }) => (open ? '460px' : '')};
  .name {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
  .last {
    display: flex;
    margin-left: auto;
    gap: 20px;
    button {
      padding: 0;
      background-color: transparent;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: ${({ open }: { open: boolean }) => (open ? '72px' : '')};
  position: relative;
  gap: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 60px);
    height: ${({ open }: { open: boolean }) => (open ? '2px' : '0')};
    background-color: var(--color-gray-200);
  }
`;

const HideContent = styled.div`
  height: 388px;
  padding: 30px 30px 50px;
  display: flex;
  gap: 50px;
`;

const MailSample = styled.div`
  padding-top: 10px;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-gray-700);
  }
  div {
    width: 100%;
    height: 100%;
    font-size: 15px;
    line-height: 20px;
    color: var(--color-primary-050);
    border-radius: 10px;
    border: 1px solid var(--color-primary-050);
    padding: 25px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }
    ::-webkit-scrollbar-thumb {
      outline: none;
      border-radius: 10px;
      border: 4px solid transparent;
      box-shadow: inset 6px 6px 0 var(--color-gray-200);
    }
    ::-webkit-scrollbar-thumb:hover {
      border: 4px solid transparent;
      box-shadow: inset 6px 6px 0 var(--color-gray-300);
    }
    ::-webkit-scrollbar-track {
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

export default MailList;
