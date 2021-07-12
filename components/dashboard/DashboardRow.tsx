import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

type ActionObject = {
  action: string;
  timestamp: Date;
  resourceSize: number;
  loadTime: number;
};

type ActionCountObject = {
  [cacheStrategyName: string]: number;
};

type DashboardRowProps = {
  resource: {
    origin: string;
    resource: string;
    strategy: string;
    active: boolean;
    actions: ActionObject[];
  };
};

const DashboardRow = ({ resource }: DashboardRowProps) => {
  const [actions, setActions] = useState<ActionCountObject | null>(null);

  useEffect(() => {
    let actionCountObj: ActionCountObject;
    if (resource.actions) {
      actionCountObj = {};
      // loop through the array of actions to create a counter object to tally distinct action occurrences
      resource.actions.forEach((actionObj: ActionObject) => {
        if (actionCountObj[actionObj.action]) {
          actionCountObj[actionObj.action]++;
        } else {
          actionCountObj[actionObj.action] = 1;
        }
      });
      setActions(actionCountObj);
    }
  }, [resource.actions]);

  return (
    <RowWrapper>
      <NameWrapper>
        <ResourceStrategyContainer>
          <ResourceTitle>Resource: </ResourceTitle>
          <ResourceStrategyName>
            {resource.resource.replace(resource.origin, '')}
          </ResourceStrategyName>
        </ResourceStrategyContainer>
        <ResourceStrategyContainer>
          <StrategyTitle>Caching strategy: </StrategyTitle>
          <ResourceStrategyName>{resource.strategy}</ResourceStrategyName>
        </ResourceStrategyContainer>
      </NameWrapper>
      <CacheEventsWrapper>
        <CacheName>Cache events</CacheName>
        <CacheEventWrapper>
          {actions &&
            Object.keys(actions).map(
              (action: string | number, index: number) => (
                <CacheEvent key={index}>
                  {action}:{' '}
                  {(
                    (Number(actions[action]) / resource.actions.length) *
                    100
                  ).toFixed(1)}
                  %
                </CacheEvent>
              )
            )}
        </CacheEventWrapper>
      </CacheEventsWrapper>
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

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResourceStrategyContainer = styled.div`
  padding-bottom: 8px;
  display: flex;
  align-items: flex-start;
`;

const ResourceTitle = styled.p`
  width: max-content;
  padding: 4px 8px;
  margin-bottom: 4px;
  border-radius: 8px;
  background-color: ${COLORS.purplePrimary};
  color: ${COLORS.offWhite};
`;

const ResourceStrategyName = styled.p`
  padding: 4px 8px;
`;

const StrategyTitle = styled.p`
  width: max-content;
  padding: 4px 8px;
  margin-bottom: 4px;
  border-radius: 8px;
  background-color: ${COLORS.orangePrimary};
  color: ${COLORS.darkGrey};
`;

const CacheEventsWrapper = styled.details``;

const CacheName = styled.summary`
  width: max-content;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${COLORS.tealPrimary};
  color: ${COLORS.offWhite};
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const CacheEventWrapper = styled.div`
  margin-top: 8px;
`;

const CacheEvent = styled.p`
  padding: 4px 8px;
`;

export default DashboardRow;
