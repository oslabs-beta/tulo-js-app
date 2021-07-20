import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

const AnchorLink = styled.a`
  color: ${COLORS.tealPrimary};

  &:hover {
    text-decoration: none;
    color: ${COLORS.orangePrimary};
  }
`;

export default AnchorLink;
