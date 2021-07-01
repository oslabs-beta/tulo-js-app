import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidthWrapper from '../components/MaxWidthWrapper';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 68px 1fr 68px;
`;

export default Layout;
