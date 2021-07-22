import React from 'react';
import styled from 'styled-components';

const DocsContent = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  flex-basis: 100%;
  width: 100%;

  @media (min-width: 992px) {
    flex-basis: 70%;
    padding-right: 100px;
  }
`;

export default DocsContent;
