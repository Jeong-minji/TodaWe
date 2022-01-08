import React from "react";
import styled from "styled-components";

const Banner3: React.FC = () => {
  return <Banner3Wrapper>Banner3</Banner3Wrapper>;
};

const Banner3Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 20px;
  background-color: yellow;
`;

export default Banner3;
