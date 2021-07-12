import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserStateObj } from '../../redux/reducers/userReducer';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import DashboardRow from './DashboardRow';

type MetricArrayType = [
  {
    origin: string;
    resource: string;
    strategy: string;
    active: boolean;
    actions: [
      {
        action: string;
        timestamp: Date;
        resourceSize: number;
        loadTime: number;
      }
    ];
  }
];

const DashboardBox = () => {
  const [resources, setResources] = useState<MetricArrayType | null>(null);

  const user = useSelector((state: { user: UserStateObj }) => state.user);
  // access the authorized origin from the signed in user
  // TODO: refactor to handle the case of multiple origins
  let origin: string = '';
  if (user.authorized_origins) origin = user.authorized_origins[0];

  useEffect(() => {
    // GET all metrics from database for the signed in user (filter by origin)
    if (origin) {
      fetch(`http://localhost:3000/api/metrics/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origin }),
      })
        .then((res) => res.json())
        .then((metricDocs: MetricArrayType | null) => {
          if (Array.isArray(metricDocs)) {
            setResources(metricDocs);
          }
        });
    }
  }, [user, origin]);

  return (
    <Box>
      {resources && resources.map((resourceDoc, i) => (
        <DashboardRow resource={resourceDoc} key={`${resourceDoc}${i}`} />
      ))}
    </Box>
  );
};

const Box = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 36px;
  margin-top: 36px;
  margin-bottom: 48px;
  border-radius: 8px;
  box-shadow: 0 0 12px ${COLORS.grey};
`;

export default DashboardBox;
