import styled from "styled-components"

const Wrapper = styled.div`
	width: 100%;
	padding: 1rem;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--white);
	color: var(--dark-gray);
	gap: 1rem;
	padding: 1rem;
	border-radius: 1rem;
`

const Text = styled.div`
	font-size: 1.5rem;
`
const SimpleCard = ({text}: {text: string}) => {
  return (
    <Wrapper>
      <Container>
				<Text>
					{text ? text : "No Content"}
				</Text>
      </Container>
    </Wrapper>
  )
}

export default SimpleCard;