import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserStatus from "../component/layout/MyPage/UserStatus";
import Comment from "../component/layout/Comment/Comment";
import Personal from "../component/layout/Personal/Personal";

const MyPage = () => {
  const [commentList, setCommentList] = useState([]);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((res) => setCommentList(res.comments));
  }, []);

  const getModalState = (modal: boolean) => {
    setModalState(modal);
  };

  return (
    <Wrapper>
      <Personal isModalOn={modalState} getModalState={getModalState} />
      <UserStatus />
      {commentList.map((comment, idx) => {
        return (
          <Comment
            key={idx}
            comment={comment}
            getModalState={getModalState}
            userType="me"
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 150px;
`;

export default MyPage;
