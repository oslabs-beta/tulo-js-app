import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

const AnchorLink = ({ children }: { children: React.ReactNode }) => {
  return <PrimaryLink>{children}</PrimaryLink>;
};

const PrimaryLink = styled.a`
  text-decoration: none;
  color: ${COLORS.tealPrimary};

  &:hover {
    cursor: pointer;
    color: ${COLORS.darkGrey};
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
    font-weight: 600;
  }
`;

export default AnchorLink;
