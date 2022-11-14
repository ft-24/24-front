import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-family: SBAggroM;
	font-size: 1.5rem;
    padding: 1rem;
	background: var(--purple);
    border-bottom: 1px solid var(--white);
`

const SectionHeader = ({children, title} : any) => {
  return (
    <Wrapper>
        {title}
        {children}
    </Wrapper>
  )
}

export default SectionHeader