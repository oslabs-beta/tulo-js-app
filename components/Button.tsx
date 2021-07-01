import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

const PrimaryButton = styled.button`
  width: min(100%, 350px);
  padding: 12px 24px;
  background-color: ${COLORS.offWhite};
  box-shadow: 0 0 20px ${COLORS.grey};
  border: 2px solid ${COLORS.offWhite};
  border-radius: 8px;
  color: ${COLORS.darkGrey};

  &:hover {
    cursor: pointer;
    box-shadow: none;
    border: 2px solid ${COLORS.darkGrey};
    transition: border 0.5s ease;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: 2px solid ${COLORS.orangePrimary};
    transition: border 0.5s ease;
  }
`;

export default Button;
