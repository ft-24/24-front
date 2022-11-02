import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react';
import RecordForm, { RecordProps } from "./RecordForm";

class UserProps {
  Record: Map<string, RecordProps>;
  nickname: string;
  profimgdir: string;
  rank: number;

  constructor (record: Map<string, RecordProps>,
    nickname: string,
    profimgdir: string,
    rank: number,) {
    this.Record = new Map(Object.entries(record));
    this.nickname = nickname;
    this.profimgdir = profimgdir;
    this.rank = rank;
  }
}

function Hello() {
  console.log("hello");
}

const Profile = () => {
  const [userData, setUserData] = useState<UserProps>();

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`https://my-24-ver1-default-rtdb.asia-southeast1.firebasedatabase.app/Users/seonhjeo.json`);
      const data: UserProps = await res.data;
      setUserData(prev => prev = new UserProps(data.Record, data.nickname, data.profimgdir, data.rank));
    }
    getData();
  }, [])

  if (userData === undefined ) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className='align-center'>
      <img src={""}></img>
      <h1>{userData.nickname + "'s Profile"}</h1>
      <hr/>
      <button
        onClick={function (event) {
          Hello();
          }
        }
      >Press to add</button>
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
    </div>
  );
}

export default Profile;
