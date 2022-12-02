import { useState } from "react"
import styled from "styled-components"
import MatchingModal from "../components/modals/MatchingModal"
import UserSearch from "../components/modals/UserSearch"

const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: blue;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Test = () => {
    const [matchingModal, setMatchingModal] = useState(false);
    const matchingModalHandler = () => {
        setMatchingModal(false);
    }
    const [userSearchModal, setuserSearchModal] = useState(false);
    const userSearchModalHandler = () => {
      setuserSearchModal(false);
  }
  return (
    <PageWrapper>
        <button onClick={()=>{setMatchingModal(true)}}>Matching</button>
        {matchingModal ? 
        <MatchingModal modalHandler={matchingModalHandler}></MatchingModal>
        : null
        }
        <button onClick={()=>{setuserSearchModal(true)}}>Search</button>
        {userSearchModal ? 
        <UserSearch modalHandler={userSearchModalHandler}></UserSearch>
        : null
        }
    </PageWrapper>
  )
}

export default Test