import styled from 'styled-components';
import { IModalProps } from '../../@types/props';
import Modal from './Modal';

const ModalWindow = ({ setIsModalOpen, setIsEditModal, isEditModal }: IModalProps) => {
  return (
    <ModalBackground>
      <Modal setIsModalOpen={setIsModalOpen} setIsEditModal={setIsEditModal} isEditModal={isEditModal} />
    </ModalBackground>
  );
};

export default ModalWindow;

const ModalBackground = styled.section`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000006b;
  padding-left: 20px;
  padding-right: 20px;
`;
