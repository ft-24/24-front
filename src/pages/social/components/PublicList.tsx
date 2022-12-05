import styled from "styled-components";
import ChannelCard from "./ChannelCard";
import SectionHeader from "../../../components/SectionHeader";
import { useEffect, useState } from "react";
import { useAuthState } from "../../../context/AuthHooks";
import axios from "axios";
import { Url } from "../../../constants/Global";

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

type ChannelInfo = {
    title: string;
}

const PublicList = ({setIsListOn, setLocate, setReceiver} : any) => {
    const [list, setList] = useState<ChannelInfo[]>();
    const { token } = useAuthState();
  
    const getList = async() => {
    await axios.get(Url + 'user/profile', {
    headers: {
        Authorization:"Bearer " + token
    }
    }).then(response => {
            setList(response.data);
    }).catch(error => {
    console.error('Public List loading failed');
    });
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <Container>
            <SectionHeader color='var(--purple)' title="채널목록">
                <div onClick={()=>setIsListOn(false)}>{"X"}</div>
            </SectionHeader>
            <ChannelSection>
            {
                list?.map((item: ChannelInfo, index) => (
					<ChannelCard
						key={index}
						type="public"
						receiver={item.title}
						setLocate={setLocate}
						setReceiver={setReceiver} />
                ))
            }
            </ChannelSection>
        </Container>
    )
};

export default PublicList