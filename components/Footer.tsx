import styled from 'styled-components';
import { COLORS } from '../styles/constants';

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>@2021 tulo.js</FooterText>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px ${COLORS.purplePrimary};
`;

const FooterText = styled.p`
  color: ${COLORS.tealPrimary};
`;

export default Footer;
