import styled from "styled-components";
import ChannelCard from "./ChannelCard";
import SectionHeader from "../../../components/SectionHeader";
import { useEffect, useState } from "react";
import PlayerInfo from "../../lobby/components/PlayerInfo";
import axios from "axios";
import { Url } from "../../../constants/Global";
import { useAuthState } from "../../../context/AuthHooks";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-right: 1px solid white;
	background: var(--dark-gray);
`

const ChannelSection = styled.div`
    display: flex;
    flex-direction: column;
`

const DMList = ({setIsListOn, setLocate, setReceiver} : any) => {
	const [list, setList] = useState<PlayerInfo[]>();
  const { token } = useAuthState();

	const getList = async() => {
    await axios.get(Url + 'user/profile', {
      headers: {
        Authorization:"Bearer " + token
      }
    }).then(response => {
			setList(response.data);
    }).catch(error => {
      console.error('DM List loading failed');
    });
	}

	useEffect(() => {
		getList();
	}, []);

	return (
		<Container>
			<SectionHeader color='var(--purple)' title="DM목록">
				<div onClick={()=>setIsListOn(false)}>{"X"}</div>
			</SectionHeader>
			<ChannelSection>
			{
				list?.map((item: PlayerInfo, index) => (
					<ChannelCard
						key={index}
						type="dm"
						receiver={item.nickname}
						setLocate={setLocate}
						setReceiver={setReceiver} />
				))
			}
			</ChannelSection>
		</Container>
	)
};

export default DMList;