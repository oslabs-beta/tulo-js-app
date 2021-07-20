import { useSelector } from 'react-redux';
import { UserStateObj } from '../../redux/reducers/userReducer';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import { ResourceType } from './DashboardBox';

type DashboardRowProps = {
  resourceObj: ResourceType;
  currentStrategy: string;
};

const DashboardRow = ({ resourceObj, currentStrategy }: DashboardRowProps) => {
  let { authorized_origin } = useSelector(
    (state: { user: UserStateObj }) => state.user
  );
  if (!authorized_origin) authorized_origin = '';

  return (
    <RowWrapper>
      <ResourceDetails>
        <summary>
          <strong>Resource: </strong>
          {resourceObj.url.replace(authorized_origin, '')}
        </summary>
        {resourceObj.strategies.map((strategyObj, index) => (
          <StrategyDetails
            current={strategyObj.strategy === currentStrategy}
            key={index}
          >
            <summary>
              {strategyObj.strategy}{' '}
              <em>
                {strategyObj.strategy === currentStrategy
                  ? '(Current strategy)'
                  : '(Old strategy)'}
              </em>
            </summary>
            <CacheConnectionDetails>
              <summary>Cache Events</summary>
              {strategyObj.events.map((eventObj, index) => (
                <CacheConnectionEvent key={index}>
                  {eventObj.event}:{' '}
                  {((eventObj.count / strategyObj.total) * 100).toFixed(1)}%
                  <em>
                    {' '}
                    ({eventObj.averageLoadTime.toFixed(2)} ms avg. load time)
                  </em>
                </CacheConnectionEvent>
              ))}
            </CacheConnectionDetails>
            <CacheConnectionDetails>
              <summary>Connection status</summary>
              {strategyObj.connections.map((connectionObj, index) => (
                <CacheConnectionEvent key={index}>
                  {connectionObj.connection.toUpperCase()}:{' '}
                  {((connectionObj.count / strategyObj.total) * 100).toFixed(1)}
                  %{' '}
                  <em>
                    ({connectionObj.averageLoadTime.toFixed(2)} ms avg. load
                    time)
                  </em>
                </CacheConnectionEvent>
              ))}
            </CacheConnectionDetails>
          </StrategyDetails>
        ))}
      </ResourceDetails>
    </RowWrapper>
  );
};

const RowWrapper = styled.article`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  color: ${COLORS.tealPrimary};
  box-shadow: 0 0 8px ${COLORS.grey};

  & p {
    font-size: 1rem;
  }
`;

const ResourceDetails = styled.details`
  font-size: 1rem;
`;

type StrategyDetailsProps = {
  current: boolean;
};

const StrategyDetails = styled.details<StrategyDetailsProps>`
  padding-left: 24px;
  padding-top: 16px;
  color: ${(p) => (p.current ? COLORS.orangePrimary : COLORS.darkGrey)};
  font-weight: ${(p) => (p.current ? 600 : 400)};
`;

const CacheConnectionDetails = styled.details`
  padding-left: 24px;
  padding-top: 16px;
  color: ${COLORS.purplePrimary};
  font-weight: 400;
`;

const CacheConnectionEvent = styled.p`
  padding-left: 24px;
  padding-top: 16px;
  color: ${COLORS.darkGrey};
`;

export default DashboardRow;
