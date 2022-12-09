import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Url } from "../../constants/Global";
import { useAuthState } from "../../context/AuthHooks";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  grid-area: image;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin: 1em;
  background: rgba( 0, 0, 0, 0 );
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  line-height: 2.2em;
  padding: 0 0.62em;
  color: var(--light-gray);
  border: none;
  border-radius: 0.25em;
  background-color: --black;
  box-shadow: inset 0 0 0.1em #fff, 0.2em 0.2em 0.2em rgba( 0, 0, 0, 0.3 );
  &:hover {
		color: var(--white);
  }
`;

const UserImage = ({profile_url} : {profile_url : string}) => {
  const [image, setImage] = useState(profile_url);
  const { token } = useAuthState();

  useEffect(() => {
    setImage(profile_url);
  }, [profile_url])
  
  const setProfileImage = async (file: any) => {
    const formData = new FormData();
    formData.append('image', file);
    
    await axios.put(Url + 'user/profile'
      , formData
      , {
          headers: {
            Authorization:"Bearer " + token
          }
    }).then(response => {
      console.log("set profile image: " + response.status);
      const url = URL.createObjectURL(file);
      setImage(url);
    }).catch(error => {
      console.error('image upload failed');
    });
  }

  const onImgChange = async (event: any) => {
    const file = event.currentTarget.files[0];
    if (file !== undefined) {
      setProfileImage(file);
    }
  }

  return (
    <Wrapper>
      <ProfileImg src={ image } alt="not fount"></ProfileImg>
      <Input type='file' id='ProfileImg' accept='image/*' name='file' onChange={onImgChange}></Input>
      <Label htmlFor="ProfileImg">Upload image</Label>
    </Wrapper>
  );
}

export default UserImage;