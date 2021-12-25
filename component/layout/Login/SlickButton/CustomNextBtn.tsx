import React from "react";
import styled from "styled-components";

interface CustomNextBtnI {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomNextBtn: React.FC<CustomNextBtnI> = ({ onClick }) => {
  return <NextBtn onClick={onClick}>다음</NextBtn>;
};

const NextBtn = styled.div`
  position: absolute;
  right: 25px;
  display: inline-block;
  margin: 0 5px;
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #f1eae3;
  font-family: Hangang;
`;

export default CustomNextBtn;
