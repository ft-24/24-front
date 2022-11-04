import styled from "styled-components"

const FeatureWrapper = styled.div`
width:50%;
display: flex;
padding: 3em;
justify-content: flex-start;
flex-direction: column;
text-align: left;
@media (max-width: 1100px) {
    width: 100%;
}
`

type Props = {
    title: string,
    article: string[],
}

const Title = styled.h1`
    color: var(--purple);
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 2em;
`

const Para = styled.li`
    margin: 1em;
`

const Feature = ({title, article} : Props) => {
    return (
        <FeatureWrapper>
            <Title>{title}</Title>
            {article.map(ele => <Para>{ele}</Para>)}
        </FeatureWrapper>
    )
};

export default Feature;