import styled from "styled-components";
import { COLORS } from '../../styles/constants';

const DashboardBox = () => {
  return (
    <Box />
  )
}

const Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  margin-top: 36px;
  margin-bottom: 48px;
  border-radius: 8px;
  box-shadow: 0 0 12px ${COLORS.grey};
`;

export default DashboardBox;