import React from 'react';
import styled from 'styled-components';

const DocsContent = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  flex-basis: 70%;
  padding-right: 100px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export default DocsContent;
