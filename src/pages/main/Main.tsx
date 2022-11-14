import MatchingButton from "./MatchingButton";
import styled from "styled-components";
import ImageList from "./ImageList";

const LayOut = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/images/background.jpg");
`;

const Main = () => {
	return (
		<LayOut>
			<ImageList />
		</LayOut>
	)
}

export default Main;
