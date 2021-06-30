import styled from 'styled-components';

type SpacerProps = {
  size: number;
};

const Spacer = ({ size }: SpacerProps) => {
  return <Gap size={size} />;
};

const Gap = styled.div<SpacerProps>`
  flex-basis: ${(p) => p.size}px;
`;

export default Spacer;
