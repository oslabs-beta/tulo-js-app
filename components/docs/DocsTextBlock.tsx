import React from 'react';
import styled from 'styled-components';

const DocsTextBlock = ({ children }: { children: React.ReactNode }) => {
  return <Paragraph>{children}</Paragraph>;
};

const Paragraph = styled.p`
  margin: 24px 0;
`;

export default DocsTextBlock;
