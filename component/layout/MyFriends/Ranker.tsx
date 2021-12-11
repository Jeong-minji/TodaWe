import React from "react";
import styled from "styled-components";

interface RankerI {
  grade: string;
}

const Ranker: React.FC<RankerI> = ({ grade }) => {
  return (
    <RankerArea>
      <GradeBox grade={grade}>{grade}</GradeBox>
      <RankerBox>
        <ImageBox />
        <NameBox>25기 정민지</NameBox>
        <LikeCount>❤️ 22개</LikeCount>
      </RankerBox>
    </RankerArea>
  );
};

export default Ranker;

const RankerArea = styled.div`
  display: flex;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  width: 604px;
`;

const GradeBox = styled.div<{ grade: string }>`
  width: 68px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ grade }) => {
    if (grade == "1st") {
      return "#FFCD4A;";
    } else if (grade == "2nd") {
      return "#DBDBDB;";
    } else {
      return "#BE7150;";
    }
  }};
  font-family: Hangang;
  font-size: 28px;
  color: white;
`;

const RankerBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  font-size: 36px;
  font-family: Hangang;
`;

const ImageBox = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 30px;
`;

const NameBox = styled.div`
  padding: 0 10px;
`;

const LikeCount = styled.div`
  /* width: 100%; */
  font-size: 28px;
  padding: 0 10px;
`;
