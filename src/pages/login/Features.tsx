import { useState } from "react";
import styled from "styled-components";
import Feature from "./Feature";

const Wrapper = styled.div`
	width: 100%;
	margin-top: 10em;
	font-size: 1em;
	display: flex;
	flex-direction: column;
`

const TitleWrapper = styled.div`
	width:100%;
	font-weight: 700;
	font-size: 4em;
`;

const FeaturesContainer = styled.div`
	width: 100%;
	display:flex;
	flex-direction: column;
	align-items: flex-start;
`

const featureArray = [
	{title: "Overview",
	article: [
		"backend must be written in NestJS.",
		"frontend must be written with a TypeScript framework of your choice.",
		"free to use any library you want to in this context. However, you must use the latest stable version of every library or framework used in your project.",
		"must use a PostgreSQL database.",
		"website must be a single-page application. The user should be able to use the Back and Forward buttons of the browser.",
		"must be compatible with the latest stable up-to-date version of Google Chrome, Firefox, and Safari.",
		"Everything has to be launch by a single call to: docker-compose up --build",
	],},
	{title : "Security concerns",
	article : [
		"Any password stored in your database must be encrypted.",
		"Your website must be protected against SQL injections.",
		"You must implement some kind of server-side validation for forms and any user input.",
	],},
	{title: "User Account",
	article: [
		"The user must login using the OAuth system of 42 intranet.",
		"The user should be able to choose a unique name that will be displayed on the website.",
		"The user should be able to upload an avatar. If the user doesn’t upload an avatar, a default one must be set.",
		"The user should be able to enable two-factor authentication. For instance, Google Authenticator or sending a text message to their phone.",
		"The user should be able to add other users as friends and see their current status (online, offline, in a game, and so forth).",
		"Stats (such as: wins and losses, ladder level, achievements, and so forth) have to be displayed on the user profile.",
		"Each user should have a Match History including 1v1 games, ladder, and anything else useful. Anyone who is logged in should be able to consult it.",
	],},
	{title: "Chat",
	article: [
		"The user should be able to create channels (chat rooms) that can be either public, or private, or protected by a password.",
		"The user should be able to send direct messages to other users.",
		"The user should be able to block other users. This way, they will see no more messages from the account they blocked.",
		"The user who has created a new channel is automatically set as the channel owneruntil they leave it.",
		"The channel owner can set a password required to access the channel, change it, and also remove it.",
		"The channel owner is a channel administrator. They can set other users as administrators.",
		"The administrators of a channel can ban or mute users for a limited time.",
		"The user should be able to invite other users to play a Pong game through the chat interface.",
		"The user should be able to access other players profiles through the chat interface",
	],},
	{title : "Game",
	article: [
	"The main purpose of this website is to play Pong versus other players and show everyone how good you are!",
	"Therefore, users should be able to play a live Pong game versus another player directly on the website.",
	"There must be a matchmaking system: the user can join a queue until they get automatically matched with someone else.",
	"It can be a canvas game, or it can be a game rendered in 3D, it can also be ugly, but in any case, it must be faithful to the original Pong (1972).",
	"You must offer some customization options (for example, power-ups or different maps). However, the user should be able to select a default version of the game without any extra features if they want to.",
	"The game must be responsive!",
	"The user should be able to watch a live play between other users without interfering with it.",
	],},
];

const Features = () => {
	const [isOn, setIsOn] = useState(new Array(featureArray.length).fill(false));
	const spreadArticle = (idx : number) => {
		const PrevState = isOn;
		let newState = [...PrevState];
		newState[idx] = !PrevState[idx];
		setIsOn(newState);
	};
	return (
		<Wrapper>
			<TitleWrapper>
			Features
			</TitleWrapper>
			<FeaturesContainer>
				{featureArray.map((ele, idx) => <Feature key={idx} title={ele.title} article={ele.article} isOn={isOn[idx]} handler={spreadArticle} idx={idx}/>)}
			</FeaturesContainer>
		</Wrapper>
	);
}

export default Features;
