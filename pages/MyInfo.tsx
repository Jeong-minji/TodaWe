import React from "react";
import styled from "styled-components";
import Personal from "../component/layout/Personal/Personal";

const MyInfo = () => {
  return (
    <Wrapper>
      <Personal></Personal>
    </Wrapper>
  );
};

export default MyInfo;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
`;
