import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserStateObj } from '../../redux/reducers/userReducer';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';
import DashboardRow from './DashboardRow';

export type MetricType = {
  origin: string;
  url: string;
  message: string;
  strategy: string;
  size: string; // e.g. 1120 (Bytes)
  loadtime: string;
  connection: string;
  device: string;
  timestamp: Date;
};

type EventType = {
  event: string; // e.g. Found in Cache
  averageLoadTime: number;
  count: number;
};

type DeviceType = {
  device: string; //e.g. Mozilla Firefox, Google Chrome
  count: number;
};

type ConnectionType = {
  connection: string; // e.g. 4G, Offline, 2G
  averageLoadTime: number;
  count: number;
};

type StrategyType = {
  strategy: string; // e.g. Cache First,
  events: EventType[];
  devices: DeviceType[];
  connections: ConnectionType[];
  total: number;
};

export type ResourceType = {
  url: string;
  size: string;
  strategies: StrategyType[];
};

//currentStrategies := {/bluewill.png: {CacheFirst, TS}, /styles.css:{CacheFirst, TS}, /index.html:{NetworkFirst, TS}, /:{NetworkFirst, TS}}
type CurrentStrategiesType = {
  [url: string]: {
    strategy: string;
    timestamp: Date;
  };
};

const DashboardBox = () => {
  const [resources, setResources] = useState<ResourceType[] | null>(null);
  const [currentStrategies, setCurrentStrategies] =
    useState<CurrentStrategiesType>({});

  const user = useSelector((state: { user: UserStateObj }) => state.user);
  // access the authorized origin from the signed in user
  let origin: string = '';
  if (user.authorized_origin) origin = user.authorized_origin;

  useEffect(() => {
    // GET all metrics from database for the signed in user (filter by origin)
    // TODO: re-factor resources array state to be more performant (and transfer logic to be held in api route)

    if (origin) {
      try {
        fetch(`/api/metrics/data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ origin }),
        })
          .then((res) => res.json())
          // save array of metric documents/objects returned from the database
          .then((metricsData) => {
            if (!metricsData) throw new Error('No metrics found');

            let currentStrategies: CurrentStrategiesType = {};

            // declare array to store fetched resources (object for each resource/url)
            const fetchedResources: ResourceType[] = [];
            for (const metricDocument of metricsData) {
              const {
                url,
                size,
                strategy,
                message,
                connection,
                device,
                loadtime,
                timestamp,
              } = metricDocument;

              // check if the resource url is already saved to the fetchedResources array
              let resourceObj: ResourceType | undefined = fetchedResources.find(
                (resObj) => resObj.url === url
              );
              if (!resourceObj) {
                resourceObj = { url, size, strategies: [] };
                fetchedResources.push(resourceObj);
              }

              // check if a strategy object exists matching the current strategy from the metric doc
              let strategyObj: StrategyType | undefined =
                resourceObj.strategies.find(
                  (stratObj) => stratObj.strategy === strategy
                );

              if (!strategyObj) {
                strategyObj = {
                  strategy,
                  events: [],
                  devices: [],
                  connections: [],
                  total: 0,
                };

                resourceObj.strategies.push(strategyObj);
              }
              strategyObj.total++;

              // check if an event object exists matching the current event from the metric doc
              let eventObj: EventType | undefined = strategyObj.events.find(
                (evtObj) => evtObj.event === message
              );
              if (!eventObj) {
                eventObj = {
                  event: message,
                  averageLoadTime: Number(loadtime),
                  count: 0,
                };
                strategyObj.events.push(eventObj);
              }
              eventObj.averageLoadTime =
                (eventObj.averageLoadTime * eventObj.count + Number(loadtime)) /
                ++eventObj.count;

              // check if a device object exists matching the current device from the metric doc
              let deviceObj: DeviceType | undefined = strategyObj.devices.find(
                (devObj) => devObj.device === device
              );
              if (!deviceObj) {
                deviceObj = { device, count: 0 };
                strategyObj.devices.push(deviceObj);
              }
              deviceObj.count++;

              // check if a connection object exists matching the current connection from the metric doc
              let connectionObj: ConnectionType | undefined =
                strategyObj.connections.find(
                  (connObj) => connObj.connection === connection
                );
              if (!connectionObj) {
                connectionObj = {
                  connection,
                  averageLoadTime: Number(loadtime),
                  count: 0,
                };
                strategyObj.connections.push(connectionObj);
              }
              connectionObj.averageLoadTime =
                (connectionObj.averageLoadTime * connectionObj.count +
                  Number(loadtime)) /
                ++connectionObj.count;

              //setting current strategies - check if the timestamp of the current strategy is > the previous 'current' strategy
              if (
                !currentStrategies[url] ||
                timestamp > currentStrategies[url].timestamp
              )
                currentStrategies[url] = { strategy, timestamp };
            }

            setCurrentStrategies(currentStrategies);

            // update resources array in state
            setResources(fetchedResources);
            console.log(fetchedResources);
          })
          .catch((err) => console.error(err));
      } catch (err) {
        console.error('Failed to fetch data from server', err);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin, user]);

  return (
    <Box>
      {resources &&
        resources.map((resourceObj, index) => (
          <DashboardRow
            resourceObj={resourceObj}
            currentStrategy={currentStrategies[resourceObj.url].strategy}
            key={index}
          />
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
  animation: glow 3s ease-in-out infinite;

  @keyframes glow {
    0% {
      box-shadow: 0 0 12px ${COLORS.darkGrey};
    }
    50% {
      box-shadow: 0 0 24px ${COLORS.purplePrimary};
    }
    100% {
      box-shadow: 0 0 12px ${COLORS.darkGrey};
    }
  }
`;

export default DashboardBox;
