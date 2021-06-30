import React from 'react';
import styled from 'styled-components';

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <Hidden>{children}</Hidden>;
};

const Hidden = styled.div`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default VisuallyHidden;
