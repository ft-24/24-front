import { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';

import { useAuthState } from "../../context/AuthHooks";
import { UserProps } from "./ProfileProps";
import UserProfile from "./UserProfile";
import RecordForm from "./RecordForm";
import LoadingPage from "../../LoadingPage";
import UserStats from './UserStats';

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
  const [tfa, setTfa] = useState(true);

  const getData = async() => {
    await axios.get('http://10.12.8.7:3000/user/profile', {
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

  const onClickTfa = async () => {
    await axios.put('http://10.12.8.7:3000/user/profile/tfa', {
        two_auth: tfa
    }, {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then(response => {
      console.log("set profile image: " + response.status);
    }).catch(error => {
      alert('image upload failed');
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
      <button onClick={() => { onClickTfa() }}>tfa</button>
      { userData.matching_history ?
        (userData.matching_history.map((value) => <RecordForm
        key = {value.time}
        time = {value.time}
        result = {value.result}
        myname = {value.myname}
        opname = {value.opname}
        myscore = {value.myscore}
        opscore = {value.opscore}
      />)) : <div>아직 한번도 플레이 하지 않았어요ㅠㅠ</div>
      }
      <UserStats stats={userData.stats} />
      </Layout>
    </BackGround>
  );
}

export default Profile;
