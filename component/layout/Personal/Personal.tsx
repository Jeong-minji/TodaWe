import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comment from "../Comment/Comment";
import API from "../../../pages/config";

interface PersonalI {
  isModalOn?: boolean;
  getModalState: (modal: boolean) => void;
}

const Personal: React.FC<PersonalI> = ({ isModalOn, getModalState }) => {
  const [like, setLike] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [commentList, setCommentList] = useState<[]>([]);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((res) => setCommentList(res.comments));
  }, []);

  const handleLike = () => {
    setLike(!like);
  };

  const setModalClose = () => {
    getModalState(false);
  };

  const getComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    // fetch(`${API.comments}/userid`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     comment: comment,
    //   }),
    // }).then((res) => {
    //   console.log(res);
    // setComment("");
    // });
  };

  return (
    <OutBackground isVisible={isModalOn}>
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
              <BtnAddComment onClick={handleAddComment}>
                댓글 입력
              </BtnAddComment>
            </CommmentInputBox>
            <CommentInput
              onChange={getComment}
              placeholder="댓글을 입력해주세요."
              value={comment}
            ></CommentInput>
            <CommentList>
              {commentList.map((item, idx) => {
                return <Comment key={idx} comment={item} userType="other" />;
              })}
            </CommentList>
          </CommentBox>
        </PersonalInfo>
        <BtnClose onClick={setModalClose}>x</BtnClose>
      </PersonalBox>
    </OutBackground>
  );
};

export default Personal;

const OutBackground = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: -80px;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PersonalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 887px;
  height: 567px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const LikeBtn = styled.div<{ like: boolean }>`
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

const CommentTitle = styled.div``;

const BtnAddComment = styled.button`
  height: fit-content;
  border: none;
  padding: 8px 25px;
  border-radius: 4px;
  background-color: #f1eae3;
  cursor: pointer;
`;

const CommmentInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 10px 0;
  align-items: center;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 72px;
  margin: 0 auto;
  padding: 10px;
  outline: none;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const CommentList = styled.div`
  height: 200px;
  margin-top: 10px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BtnClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
