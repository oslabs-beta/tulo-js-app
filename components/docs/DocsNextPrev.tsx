import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

type NextPrevProps = {
  prev: string | null;
  prevRef: string;
  next: string | null;
  nextRef: string;
};

const DocsNextPrev = ({ prev, prevRef, next, nextRef }: NextPrevProps) => {
  return (
    <Wrapper>
      {prev ? (
        <Link href={prevRef} passHref>
          <Prev>{prev}</Prev>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={nextRef} passHref>
          <Next>{next}</Next>
        </Link>
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
`;

const Nav = styled.a`
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.orangePrimary};
  text-decoration: none;
  text-align: center;
  border: 2px solid ${COLORS.orangePrimary};
  border-radius: 8px;
`;

const Next = styled(Nav)`
  &::after {
    content: '  \u2192';
  }
`;

const Prev = styled(Nav)`
  &::before {
    content: '\u2190  ';
  }
`;

export default DocsNextPrev;
