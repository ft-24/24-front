import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { UserProps } from "./ProfileProps";
import RecordForm from "./RecordForm";

import LoadingPage from "../../LoadingPage";
import UserProfile from "./UserProfile";

const BackGround = styled.div`
  width : 100%;
  height: 100%;
  margin-top: 80px;
  background-image : url("/images/background.jpg");
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

function Hello() {
  console.log("hello");
}

const Profile = () => {
  const [userData, setUserData] = useState<UserProps>();

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`https://my-24-ver1-default-rtdb.asia-southeast1.firebasedatabase.app/Users/seonhjeo.json`);
      const data: UserProps = await res.data;
      setUserData(prev => prev = new UserProps(data.Stats, data.Record, data.nickname, data.profimgdir, data.rank));
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
      { userData.Record && (Array.from(userData.Record.values()).map((value) => <RecordForm
        key = {value.time}
        time = {value.time}
        result = {value.result}
        myname = {value.myname}
        opname = {value.opname}
        myscore = {value.myscore}
        opscore = {value.opscore}
      />))
      }
      </Layout>
      </Layout>
    </BackGround>
  );
}

export default Profile;
