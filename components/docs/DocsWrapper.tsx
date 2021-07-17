import React from 'react';
import styled from 'styled-components';

const DocsWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  padding: 48px 0;
  display: flex;
  font-size: 2rem;
`;

export default DocsWrapper;
