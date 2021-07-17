import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

// TODO: add copy to clipboard functionality
const CodeSnippet = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.article`
  margin: 24px 0;
  padding: 16px;
  border-radius: 8px;
  background-color: ${COLORS.darkGrey};
  color: ${COLORS.offWhite};
  font-size: 1rem;

  &::before {
    content: '>> ';
  }
`;

export default CodeSnippet;
