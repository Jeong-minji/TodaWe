import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Comment/Comment";

const Personal: React.FC = () => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <PersonalBox>
      <PersonalInfo>
        <PersonalInfoBox>
          <InfoImg>🐰</InfoImg>
          <InfoDesc>
            <MainDesc>
              <InfoName>25기 김용현</InfoName>
              <DetailInfo>
                <MyStatus />
                <MyFeeling>💻 코딩중</MyFeeling>
              </DetailInfo>
            </MainDesc>
            <InfoComment>어쩌구 저쩌구</InfoComment>
            <InfoLike>❤️ 21</InfoLike>
          </InfoDesc>
          <LikeBtn onClick={handleLike} like={like}>
            좋아요
          </LikeBtn>
        </PersonalInfoBox>
        <CommentBox>
          <CommmentInputBox>
            <CommentTitle>+ Comment</CommentTitle>
            <CommentInput placeholder="댓글을 입력해주세요."></CommentInput>
          </CommmentInputBox>
          {/* <Comment></Comment>
        <Comment></Comment> */}
        </CommentBox>
      </PersonalInfo>
    </PersonalBox>
  );
};

export default Personal;

const PersonalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 887px;
  height: 567px;
  background-color: #ffffff;
`;

const PersonalInfo = styled.div``;

const PersonalInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 158px;
  border-radius: 50%;
  background-color: #c4c4c4;
  font-size: 150px;
`;

const InfoDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 158px;
  margin-left: 40px;
  margin-right: 40px;
`;

const MainDesc = styled.div`
  display: flex;
  align-items: center;
`;

const LikeBtn = styled.div`
  padding: 20px 40px;
  border-radius: 30px;
  background-color: ${({ like }) => (like ? "#ED4E4E;" : "#e5e5e5;")};
  color: ${({ like }) => (like ? "#ffffff;" : "black;")};
  box-shadow: ${({ like }) => (like ? "inset 2px 2px 2px;" : "2px 2px 2px;")};
  font-size: 24px;
  font-family: Hangang;
`;

const InfoName = styled.div`
  font-size: 48px;
  font-family: Hangang;
`;

const DetailInfo = styled.div`
  display: flex;
  margin-left: 20px;
`;

const MyStatus = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: green;
`;

const MyFeeling = styled.div``;

const InfoComment = styled.div`
  font-size: 22px;
  font-family: Hangang;
`;

const InfoLike = styled.div`
  font-size: 22px;
  font-family: Hangang;
`;

const CommentBox = styled.div``;

const CommentTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const CommmentInputBox = styled.div`
  /* text-align: center; */
`;

const CommentInput = styled.input`
  width: 100%;
  height: 72px;
  margin: 0 auto;
`;

const CommentList = styled.div``;
