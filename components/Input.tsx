import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/constants';

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
};

const Input = ({ name, type, placeholder }: InputProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <PrimaryInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

const PrimaryInput = styled.input`
  width: min(100%, 350px);
  padding: 12px 4px;
  border: 2px solid ${COLORS.purplePrimary};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${COLORS.orangePrimary};
    box-shadow: 0 0 0 2px ${COLORS.orangePrimary};
    transition: all 0.3s ease;
  }
`;

export default Input;
