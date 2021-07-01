import React from 'react';
import styled from 'styled-components';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: calc(100% - 48px);
  margin: 0 auto;
  display: flex;
  @media (min-width: 576px) {
    & {
      max-width: 500px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 650px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 800px;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1000px;
    }
  }
  @media (min-width: 1400px) {
    & {
      max-width: 1200px;
    }
  }
`;

export default MaxWidthWrapper;
