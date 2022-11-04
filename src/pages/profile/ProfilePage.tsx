import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { UserProps } from "./ProfileProps";
import RecordForm from "./RecordForm";

import LoadingPage from "../../LoadingPage";
import UserProfile from "./UserProfile";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em;
  padding: 1em;
  justify-content: center;
  align-items: center;
`;

const ProfileTitle = styled.h1`
  font-size: 4em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
  align-items: center;
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
    <div>
      <Layout>
      <UserProfile data={userData} />
      <div>
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
      </div>
      </Layout>
    </div>
  );
}

export default Profile;
