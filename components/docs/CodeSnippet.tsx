import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

type CodeSnippetProps = {
  terminal: boolean;
  children: React.ReactNode;
};

// TODO: add copy to clipboard functionality
const CodeSnippet = ({ terminal, children }: CodeSnippetProps) => {
  return (
    <Wrapper terminal={terminal}>
      <code>{children}</code>
    </Wrapper>
  );
};

const Wrapper = styled.article<{ terminal: boolean }>`
  margin: 24px 0;
  padding: 16px;
  border-radius: 8px;
  background-color: ${COLORS.darkGrey};
  color: ${COLORS.offWhite};
  font-size: 1rem;

  &::before {
    content: '${(p) => (p.terminal ? '>> ' : '')}';
  }
`;

export default CodeSnippet;
