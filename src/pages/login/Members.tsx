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
  width: 100%;
  font-weight: 700;
  font-size: 4em;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemberArray = [
  {
    position: "BackEnd",
    name: "chanhuil",
    img: "https://cdn.intra.42.fr/users/cc12de48bbeeb392cd7f05b323a24895/young-ch.jpg",
  },
  {
    position: "FrontEnd",
    name: "seonhjeo",
    img: "https://cdn.intra.42.fr/users/cc12de48bbeeb392cd7f05b323a24895/young-ch.jpg",
  },
  {
    position: "FrontEnd",
    name: "sunhkim",
    img: "https://cdn.intra.42.fr/users/cc12de48bbeeb392cd7f05b323a24895/young-ch.jpg",
  },
  {
    position: "BackEnd",
    name: "yoahn",
    img: "https://cdn.intra.42.fr/users/cc12de48bbeeb392cd7f05b323a24895/young-ch.jpg",
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
