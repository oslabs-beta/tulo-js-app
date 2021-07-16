import React from 'react';
import styled from 'styled-components';

const DocsTextBlock = ({ children }: { children: React.ReactNode }) => {
  return <Paragraph>{children}</Paragraph>;
};

const Paragraph = styled.p`
  margin-top: 24px;
`;

export default DocsTextBlock;
