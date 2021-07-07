import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { useSelector, useDispatch } from 'react-redux';
import { UserStateObj } from '../../redux/reducers/userReducer';
import { addAuthorizedOrigin } from '../../redux/actions/actionCreators';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { COLORS } from '../../styles/constants';

const Dashboard = () => {
  const [session, loading] = useSession();

  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserStateObj }) => state.user);

  const [origin, setOrigin] = useState('');

  const handleOriginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value);
  };

  const handleAddUrlClick = () => {
    // add authorized URL/origin to user document in database
    fetch('http://localhost:3000/api/user/addOrigin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: user._id,
        origin: origin,
      }),
    })
      .then((res) => res.json())
      .then((userDoc) => {
        // TODO: dispatch action to update user state branch
        console.log({ userDoc });
        dispatch(
          addAuthorizedOrigin({
            authorized_origins: userDoc.authorized_origins,
          })
        );
      });
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
                    <strong>App origin(s): </strong>
                    {user.authorized_origins ? (
                      <DisplayOrigins>
                        {user.authorized_origins.join(', ')}
                      </DisplayOrigins>
                    ) : (
                      ''
                    )}
                  </p>
                </NameContainer>
                <UrlContainer>
                  <Input
                    name='URL'
                    type='text'
                    placeholder='https://example.app'
                    value={origin}
                    onChange={handleOriginChange}
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
  align-items: center;
`;

const NameContainer = styled.div`
  max-width: 50%;

  & p {
    font-size: 1.2rem;
  }
`;

const DisplayOrigins = styled.span`
  font-size: 1rem;
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
