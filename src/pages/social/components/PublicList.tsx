import styled from "styled-components";
import ChannelCard from "./ChannelCard";
import SectionHeader from "../../../components/SectionHeader";

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

const PublicList = ({setIsListOn, setLocate, setTitle} : any) => {
    return (
        <Container>
            <SectionHeader color='var(--purple)' title="채널목록">
                <div onClick={()=>setIsListOn(false)}>{"X"}</div>
            </SectionHeader>
            <ChannelSection>
                <ChannelCard title setLocate={setLocate} setTitle={setTitle}></ChannelCard>
            </ChannelSection>
        </Container>
    )
};

export default PublicList