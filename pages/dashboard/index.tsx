import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { useSelector } from 'react-redux';
import { UserStateObj } from '../../redux/reducers/userReducer';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { COLORS } from '../../styles/constants';

const Dashboard = () => {
  const [session, loading] = useSession();
  const user = useSelector((state: { user: UserStateObj }) => state.user);

  const handleAddNameClick = () => {
    // add app name to user document in database
  };

  const handleAddUrlClick = () => {
    // add authorized URL/origin to user document in database
  };

  // if a user session is loading, display the Loading component
  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>Dashboard | tulo.js</title>
        <meta
          name='description'
          content='Dashboard for tulojs cache monitoring.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main>
          {!session ? (
            <Link href='/signin' passHref>
              <SigninLink>Sign in to view the dashboard &rarr;</SigninLink>
            </Link>
          ) : (
            <>
              <DashboardBar>
                <NameContainer>
                  <p>
                    <strong>App name: </strong>
                    {user.appName ? (
                      user.appName
                    ) : (
                      <AddCompanyButton onClick={handleAddNameClick}>
                        Add
                      </AddCompanyButton>
                    )}
                  </p>
                  <p>
                    <strong>Origin(s): </strong>
                    {user.authorized_origins ? user.authorized_origins : ''}
                  </p>
                </NameContainer>
                <UrlContainer>
                  <Input
                    name='URL'
                    type='text'
                    placeholder='https://example.app'
                  />
                  <Button onClick={handleAddUrlClick}>
                    Add authorized origin
                  </Button>
                </UrlContainer>
              </DashboardBar>
              <DashboardBox></DashboardBox>
            </>
          )}
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const SigninLink = styled.a`
  text-decoration: none;
  color: ${COLORS.tealPrimary};

  &:hover {
    cursor: pointer;
    color: ${COLORS.orangePrimary};
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
    text-shadow: 0 0 8px ${COLORS.grey};
  }
`;

const DashboardBar = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  & p {
    font-size: 1.2rem;
  }
`;

const AddCompanyButton = styled.button`
  margin-left: 8px;
  font-size: 1rem;
  color: ${COLORS.offWhite};
  background-color: ${COLORS.purplePrimary};
  border: 1px solid ${COLORS.purplePrimary};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    color: ${COLORS.offWhite};
    background-color: ${COLORS.orangePrimary};
    border: 1px solid ${COLORS.orangePrimary};
  }
`;

const UrlContainer = styled.div`
  & input,
  & button {
    width: max-content;
    font-size: 1rem;
    text-align: center;
    margin-left: 16px;
  }
`;

const DashboardBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  margin-top: 36px;
  margin-bottom: 48px;
  border-radius: 8px;
  box-shadow: 0 0 12px ${COLORS.grey};
`;

export default Dashboard;
