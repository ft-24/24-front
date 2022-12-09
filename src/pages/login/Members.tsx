import { forwardRef, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import Member from "./Member";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-weight: 700;
  font-size: 4em;
  width: 100%;
	margin-left: 6rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemberArray = [
  {
    position: "BackEnd",
    name: "chanhuil",
    img: "https://cdn.intra.42.fr/users/cdec2900a0704ab8907c5f1b5b6a0c03/chanhuil.jpg",
  },
  {
    position: "FrontEnd",
    name: "seonhjeo",
    img: "https://cdn.intra.42.fr/users/16b401779fd046aa92d9724eac4cc59d/seonhjeo.jpg",
  },
  {
    position: "FrontEnd",
    name: "sunhkim",
    img: "https://cdn.intra.42.fr/users/e293b723021c9b9e010ce98254830eb6/sunhkim.jpg",
  },
  {
    position: "BackEnd",
    name: "yoahn",
    img: "https://cdn.intra.42.fr/users/84e8c9a763ed5ad08a99ac73f964384e/yoahn.jpg",
  },
  {
    position: "FrontEnd",
    name: "young-ch",
    img: "https://cdn.intra.42.fr/users/cc12de48bbeeb392cd7f05b323a24895/young-ch.jpg",
  },
];

const Members = forwardRef<HTMLDivElement>((props, ref) => {
  const [flip, setFlip] = useState(new Array(MemberArray.length).fill(false));

  const onClickHandler = (idx: number) => {
    const newState = [...flip];
    newState[idx] = !newState[idx];
    setFlip(newState);
  };

  const shuffle = useCallback((array: any[]) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  }, []);

  const shuffledMemberArray = useMemo(() => shuffle(MemberArray), []);

  return (
    <Wrapper ref={ref}>
      <TitleWrapper>Members</TitleWrapper>
      <MemberContainer>
        {shuffledMemberArray.map((ele, idx) => {
            return (
                <Member
                position={ele.position}
                name={ele.name}
                idx={idx}
                onClickHandler={onClickHandler}
                isFront={flip[idx]}
                img={ele.img}
                key={ele.name}
                ></Member>
                );
            })}
      </MemberContainer>
    </Wrapper>
  );
})

export default Members;
