import MatchingButton from "./MatchingButton";
import styled from "styled-components";

const LayOut = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: column;
  align-items: center;
`

const Main = () => {
	return (
		<LayOut>
			<h1>Main</h1>
			<br></br>
			<MatchingButton></MatchingButton>
		</LayOut>
	)
}

export default Main;
