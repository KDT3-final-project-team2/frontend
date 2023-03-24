import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';

const AlertModal = ({ message, action }: AlertType) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='pop-overlay'>
          {action ? (
            <Alert>
              <p>{message}</p>
              <button
                onClick={() => {
                  action();
                  onClose();
                }}
              >
                확인
              </button>
            </Alert>
          ) : (
            <Alert>
              <p>{message}</p>
              <button
                onClick={() => {
                  onClose();
                }}
              >
                확인
              </button>
            </Alert>
          )}
        </div>
      );
    },
  });
};

const Alert = styled.div`
  word-break: keep-all;
  p {
    padding: 70px 60px 55px;
    font-size: 16px;
    line-height: 1.4em;
    text-align: center;
  }
  button {
    width: 100%;
    height: 55px;
    background: var(--color-primary);
    color: #fff;
    font-weight: bold;
  }
`;

export default AlertModal;
