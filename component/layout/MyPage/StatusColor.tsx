import React from "react";
import styled from "styled-components";

interface StatusColorI {
  color: string;
  handleColor: () => void;
}

const StatusColor: React.FC<StatusColorI> = ({ color, handleColor }) => {
  return <Wrapper onClick={handleColor} color={color}></Wrapper>;
};

const Wrapper = styled.div<{ color: string }>`
  width: 13px;
  height: 13px;
  margin-top: -4px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default StatusColor;
