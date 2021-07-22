import Link from 'next/link';
import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

type DocsSidebarProps = {
  active: string;
};

const DocsSidebar = ({ active }: DocsSidebarProps) => {
  return (
    <Sidebar>
      <LinkWrapper route='getting-started' active={active}>
        <Link href='/docs/getting-started' passHref>
          <LinkText>Getting started</LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper route='install' active={active}>
        <Link href='/docs/install' passHref>
          <LinkText>Installation</LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper route='service-worker' active={active}>
        <Link href='/docs/add-a-service-worker' passHref>
          <LinkText>Add a service worker</LinkText>
        </Link>
      </LinkWrapper>
      <LinkWrapper route='monitor' active={active}>
        <Link href='/docs/monitor' passHref>
          <LinkText>Monitor</LinkText>
        </Link>
      </LinkWrapper>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  flex-basis: 30%;
  position: sticky;
  top: 116px;
  align-self: flex-start;

  @media (max-width: 992px) {
    display: none;
  }
`;

type LinkWrapperProps = {
  active: string;
  route: string;
};

const LinkWrapper = styled.div<LinkWrapperProps>`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  border-left: ${(p) => (p.active === p.route ? '4px' : '2px')} solid
    ${(p) => (p.active === p.route ? COLORS.purplePrimary : COLORS.darkGrey)};
  color: ${(p) =>
    p.active === p.route ? COLORS.purplePrimary : COLORS.darkGrey};
  font-weight: ${(p) => (p.active === p.route ? 600 : 400)};
`;

const LinkText = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  color: inherit;
`;

export default DocsSidebar;
