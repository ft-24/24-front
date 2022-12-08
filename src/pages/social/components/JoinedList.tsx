import styled from "styled-components";
import ChannelCard from "./ChannelCard";
import SectionHeader from "../../../components/SectionHeader";
import { useEffect, useState } from "react";
import { useAuthState } from "../../../context/AuthHooks";
import axios from "axios";
import { Url } from "../../../constants/Global";
import { ChannelInfo } from "./ChannelInfo";

const Container = styled.div`
    width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-right: 1px solid white;
	background: var(--dark-gray);
`

const ChannelSection = styled.div`
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`

const EmptyText = styled.div`
	padding: 1rem;
`

const JoinedList = ({setIsListOn, setLocate, setType, setTarget, setIsPasswordModalOn} : any) => {
    const [list, setList] = useState<ChannelInfo[]>([]);
    const { token, intra } = useAuthState();
  
    const getList = async() => {
        await axios.get(Url + 'channels/joined', {
            headers: {
                Authorization:"Bearer " + token
            }
        }).then(response => {
			console.log(response.data);
            setList(response.data.rooms);
        }).catch(error => {
            console.error('Joined List loading failed');
        });
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <Container>
            <SectionHeader color='var(--purple)' title="채널목록">
                <div style={{cursor: "pointer"}} onClick={()=>setIsListOn(false)}>{"X"}</div>
            </SectionHeader>
            <ChannelSection>
            {
                list && (list.length > 0) ? list.map((item: ChannelInfo, index) => (
					<ChannelCard
						key={index}
						type={item.access_modifier}
						receiver={item.name}
                        memberList={undefined}
						setLocate={setLocate}
						setType={setType}
                        setTarget={setTarget} 
                        setIsPasswordModalOn={setIsPasswordModalOn}/>
                )) : <EmptyText>참여중인 채널이 없어요...</EmptyText>
            }
            </ChannelSection>
        </Container>
    )
};

export default JoinedList