import styled from "styled-components";

const FeatureWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 3em;
  padding-bottom: 0;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

type Props = {
  title: string;
  article: string[];
  isOn: boolean;
  idx: number;
  handler: any;
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--white);
  align-items: center;
`;

type ButtonProps = {
  isOn: boolean;
  onClick: any;
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  transform: ${(props) => (props.isOn ? `rotate(180deg)` : "")};
`;

const Title = styled.h1`
  display: inline-block;
  color: var(--purple);
  font-weight: 700;
  font-size: 2em;
`;

const ArticleContainer = styled.div``;

const Para = styled.li`
  margin: 1em;
  list-style: none;
`;

const Feature = ({ title, article, isOn, idx, handler }: Props) => {
  return (
    <FeatureWrapper>
      <TitleWrapper
        onClick={() => {
          handler(idx);
        }}
      >
        <Title>{title}</Title>
        <StyledButton
          onClick={() => {
            handler(idx);
          }}
          isOn={isOn}
        >
          V
        </StyledButton>
      </TitleWrapper>
      <ArticleContainer>
        {isOn ? article.map((ele, idx) => <Para key={idx}>{ele}</Para>) : null}
      </ArticleContainer>
    </FeatureWrapper>
  );
};

export default Feature;
