import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin-top: 5em;
	font-size: 1em;
	padding: 3em;
`

const FeatureTextWrapper = styled.div`
	width:100%;
	padding: 1em;
	margin-bottom: 2em;
	border: 1px solid var(--white);
	& > h1 {
		border-radius: 1em;
		font-weight: 700;
		font-size: 4em;
	}
`;

const FeaturesContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: flex-start;
`

const FeatureWrapper = styled.div`
	width: 25%;
	padding: 1em;
	& > h1 {
		font-weight: 700;
		font-size: 2em;
	}
`

const Feature = () => {
	return (
		<Wrapper>
			<FeatureTextWrapper>
			<h1>Feature</h1>
			</FeatureTextWrapper>
			<FeaturesContainer>
				<FeatureWrapper>
					<h1>Security</h1>
					<p>password be encrypted.</p>
					<p>protected against SQL injections.</p>
					<p>server-side validation for any forms and input</p>
				</FeatureWrapper>
				<FeatureWrapper>
					<h1>Account</h1>
					<p>the OAuth system of 42 intranet</p>
					<p>two-factor authentication</p>
					<p>Match History</p>
				</FeatureWrapper>
				<FeatureWrapper>
					<h1>Chat</h1>
					<p>public, protected, private channels</p>
					<p>direct messages</p>
					<p>block other users</p>
				</FeatureWrapper>
				<FeatureWrapper>
					<h1>Game</h1>
					<p>matchmaking system</p>
					<p>customization options</p>
					<p>responsive Original Pong</p>
				</FeatureWrapper>
			</FeaturesContainer>
		</Wrapper>
	);
}

export default Feature;
