import React from "react";
import styled from "styled-components";

const Banner2: React.FC = () => {
  return <Banner2Wrapper>Banner2</Banner2Wrapper>;
};

const Banner2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 20px;
  background-color: salmon;
`;

export default Banner2;
