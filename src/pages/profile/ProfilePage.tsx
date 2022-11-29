import { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

import { useAuthState } from "../../context/AuthHooks";
import { historyProps, UserProps } from "./ProfileProps";
import UserProfile from "./UserProfile";
import MatchingHistory from "./MatchingHistory";
import LoadingPage from "../../LoadingPage";
import UserStats from './UserStats';
import { Url } from '../../constants/Global';

const BackGround = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image : url("/src/images/background.jpg");
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em;
  padding: 1em;
  justify-content: center;
  align-items: center;
  background: rgba( 0, 0, 0, 0 );
`;

const Profile = () => {
  const [userData, setUserData] = useState<UserProps>();
  const { token } = useAuthState();
  const getData = async() => {
    await axios.get(Url + 'user/profile', {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
      const data: UserProps = response.data;
      setUserData(prev => prev = new UserProps(data.intra_id, data.nickname, data.profile_url, data.two_factor, data.stats, data.matching_history));    
    }).catch(error => {
      alert('user profile loading failed');
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (userData === undefined ) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BackGround>
      <Layout>
      <UserProfile data={userData} />
      { userData.matching_history ?
          (userData.matching_history.map((item: historyProps, index) => (
          <MatchingHistory
            key={index}
            name={userData.nickname}
            image={userData.profile_url}
            history={item} />
          ))) : <div>아직 한번도 플레이 하지 않았어요ㅠㅠ</div>
      }
      <UserStats stats={userData.stats} />
      </Layout>
    </BackGround>
  );
}

export default Profile;
