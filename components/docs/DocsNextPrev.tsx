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
  flex-direction: column;
  align-items: center;
  padding-top: 48px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Nav = styled.a`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.orangePrimary};
  text-decoration: none;
  text-align: center;
  border: 2px solid ${COLORS.orangePrimary};
  border-radius: 8px;

  &:hover {
    border: 2px solid ${COLORS.offWhite};
    box-shadow: 0 0 8px ${COLORS.orangePrimary};
  }

  @media (min-width: 1000px) {
    width: max-content;
    margin-bottom: 0;
  }
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
