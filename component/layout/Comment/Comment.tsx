import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
  const addRepl = () => {
    // colleague 페이지 모달 띄우기
  };

  return (
    <CommentBox>
      <CommentImg></CommentImg>
      <CommentDesc>
        <CommentorInfo>
          <CommentName>{comment.name}</CommentName>
          <CommentDate>{comment.date}</CommentDate>
        </CommentorInfo>
        <CommentContent>{comment.comment}</CommentContent>
      </CommentDesc>
      <ReplBtnBox>
        <ReplBtn onClick={addRepl}>댓글 다쉴?</ReplBtn>
      </ReplBtnBox>
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 722px;
  /* height: 100px; */
  background-color: orange;
  border-bottom: 1px solid #ddd3d3;
  margin: 0 auto;
`;

const CommentImg = styled.div`
  width: 46px;
  height: 46px;
  margin: 0 20px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const CommentDesc = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px 0;
`;

const CommentorInfo = styled.div``;

const CommentName = styled.div`
  font-size: 14px;
  font-family: Hangang;
`;

const CommentDate = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #ddd3d3;
  font-family: Hangang;
`;

const CommentContent = styled.div`
  width: 500px;
  /* height: 12px; */
  overflow-y: scroll;
  /* padding-top: 10px; */
  font-size: 16px;
  /* padding-bottom: 10px; */
  font-family: Hangang;
`;

const ReplBtnBox = styled.div`
  position: absolute;
  right: 0;
  margin-right: 20px;
`;

const ReplBtn = styled.div`
  padding: 12px;
  background-color: #ddcec0;
  border: 1px solid brown;
  border-radius: 8px;
  font-family: Hangang;
`;
