import React from "react";
import styled from "styled-components";

const Banner1: React.FC = () => {
  return <Banner1Wrapper>Banner1</Banner1Wrapper>;
};

const Banner1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 100px;
  border-radius: 20px;
  background-color: saddlebrown;
`;

export default Banner1;
