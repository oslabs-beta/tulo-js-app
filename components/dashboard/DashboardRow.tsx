import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import { ResourceType } from './DashboardBox';

const DashboardRow = ({ resourceObj }: { resourceObj: ResourceType }) => {
  return (
    <RowWrapper>
    </RowWrapper>
  );
};

const RowWrapper = styled.article`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 8px ${COLORS.tealPrimary};

  & p {
    font-size: 1rem;
  }
`;

export default DashboardRow;
