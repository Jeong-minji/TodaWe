import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "../component/layout/Comment/Comment";

const CommentTest = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("data/comments.json")
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data.comments);
      });
  }, []);

  console.log(commentList);
  return (
    <>
      {commentList.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
    </>
  );
};

export default CommentTest;
