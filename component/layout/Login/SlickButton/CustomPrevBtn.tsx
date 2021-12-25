import React from "react";
import styled from "styled-components";

interface CustomPrevBtnI {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomPrevBtn: React.FC<CustomPrevBtnI> = ({ onClick }) => {
  return <PrevBtn onClick={onClick}>이전</PrevBtn>;
};

const PrevBtn = styled.div`
  position: absolute;
  right: 95px;
  bottom: -26px;
  display: inline-block;
  margin: 0 5px;
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #f1eae3;
  font-family: Hangang;
`;

export default CustomPrevBtn;
