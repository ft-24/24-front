import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100px;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10;
	padding: 3em;
`

const Navbar = styled.nav`
	display: flex;
	padding: 1em;
`

const Link = styled.a`
	display: block;
	margin-left: 1em;
`

const Header = () => {
	return (
			<Container>
				<div>
				<h1>Logo</h1>
				</div>
				<Navbar>
					<Link>top</Link>
					<Link>about</Link>
					<Link>feature</Link>
					<Link>contact</Link>
				</Navbar>
			</Container>
	)
}

export default Header;
