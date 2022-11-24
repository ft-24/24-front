import styled from "styled-components";
import { useEffect, useState } from 'react';
import Modal from "../../components/Modal";
import ImageCard from "./ImageCard";
import TFA from "../../components/TFA";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/images/background.jpg");
`;

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  background: var(--dark-gray);

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Home = () => {
  const [modal, setModal] = useState(true);
  useEffect(()=>{
    if (localStorage.getItem('2facode')) {
      setModal(false);
    }
  },[]);
  const modalHandler = () => {
    setModal(false);
  }

	return (
		<Layout>
			<Wrapper>
        <ImageCard text={"Private"} imagePath={"/images/lock.png"} imagePadding="15px" routePath={"/matching"}/>
        <ImageCard text={"Public"} imagePath={"/images/earth.png"} imagePadding="25px" routePath={"/lobby"}/>
        <ImageCard text={"Arcade"} imagePath={"/images/controller.png"} imagePadding="15px" routePath={"/matching"}/>
        <ImageCard text={"Ladder"} imagePath={"/images/trophy.png"} imagePadding="15px" routePath={"/matching"}/>
        <ImageCard text={"Social"} imagePath={"/images/chat.png"} imagePadding="20px" routePath={"/social"}/>
			</Wrapper>
      {modal ?
        <Modal modalHandler={()=>{}}><TFA modalHandler={modalHandler}/></Modal> : null
      }
		</Layout>
	)
}

export default Home;
