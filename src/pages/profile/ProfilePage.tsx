import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { UserProps } from "./ProfileProps";
import RecordForm from "./RecordForm";

import LoadingPage from "../../LoadingPage";
import UserProfile from "./UserProfile";

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

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get('http://10.13.9.5:3000/user/me');
      const data: UserProps = await res.data;
      console.log(res.data);
      setUserData(prev => prev = new UserProps(data.intra_id, data.nickname, data.profile_url, data.stats, data.matching_history));
    }
    getData();
  }, [])

  if (userData === undefined ) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BackGround>
      <Layout>
      <UserProfile data={userData} />
      <Layout>
      {/* { userData.Record && (Array.from(userData.Record.values()).map((value) => <RecordForm
        key = {value.time}
        time = {value.time}
        result = {value.result}
        myname = {value.myname}
        opname = {value.opname}
        myscore = {value.myscore}
        opscore = {value.opscore}
      />))
      } */}
      </Layout>
      </Layout>
    </BackGround>
  );
}

export default Profile;
