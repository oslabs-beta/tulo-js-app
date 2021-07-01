import Image from 'next/image';
import styled from 'styled-components';
import gearLogo from '../public/images/gear-logo.png';
import { COLORS } from '../styles/constants';

const Loading = () => {
  return (
    <Wrapper>
      <SpinningImage>
        <Image src={gearLogo} alt='loading spinner' width={150} height={150} />
      </SpinningImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.tealPrimary};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinningImage = styled.div`
  // TODO: loading spinner is not perfectly circular
  animation: spin linear 5s infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
