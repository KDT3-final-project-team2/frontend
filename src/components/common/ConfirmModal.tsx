import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';

type ConfirmType = {
  message: string;
  action?: any;
};

const ConfirmModal = ({ message, action }: ConfirmType) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='pop-overlay'>
          <Confirm>
            <p>{message}</p>
            <Button>
              <button
                onClick={() => {
                  onClose();
                }}
              >
                취소
              </button>
              <button
                onClick={() => {
                  action();
                  onClose();
                }}
              >
                확인
              </button>
            </Button>
          </Confirm>
        </div>
      );
    },
  });
};

const Confirm = styled.div`
  word-break: keep-all;
  p {
    padding: 70px 60px 55px;
    font-size: 16px;
    line-height: 1.4em;
    text-align: center;
  }
`;

const Button = styled.div`
  display: flex;
  button {
    width: 50%;
    height: 55px;
    background: var(--color-primary);
    color: #fff;
    font-weight: bold;
    :first-child {
      color: #000;
      background-color: #f3f4f6;
    }
  }
`;

export default ConfirmModal;
