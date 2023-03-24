import Lottie from 'lottie-react';
import loading from '../../lotties/loading.json';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/useDispatchHooks';

const Loading = () => {
  const loadingState = useAppSelector(state => state.loading.isLoading);
  if (loadingState === false) return null;

  return (
    <Cantainer>
      <Lottie animationData={loading} loop={true}></Lottie>
    </Cantainer>
  );
};

const Cantainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  div {
    width: 20vw;
  }
`;

export default Loading;
