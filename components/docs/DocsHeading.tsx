import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

// TODO: add # link
const DocsHeading = ({ children }: { children: React.ReactNode }) => {
  return <Heading>{children}</Heading>;
};

const Heading = styled.h1`
  margin-bottom: 24px;

  /* &:hover {
    &::after {
      cursor: pointer;
      content: ' #';
      color: ${COLORS.orangePrimary};
    }
  } */
`;

export default DocsHeading;
