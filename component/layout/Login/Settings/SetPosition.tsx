import React from "react";
import styled from "styled-components";

interface SetPositionI {
  getPosition: (position: string) => void;
}

const SetPosition: React.FC<SetPositionI> = ({ getPosition }) => {
  const getSelectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getPosition(e.target.value);
  };

  return (
    <SetPositionWrapper>
      <Title>포지션</Title>
      <SelectPosition
        name="position"
        defaultValue="default"
        onChange={getSelectedValue}
      >
        <option value="FRONT">프론트엔드</option>
        <option value="BACK">백엔드</option>
      </SelectPosition>
    </SetPositionWrapper>
  );
};

const SetPositionWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const Title = styled.h2`
  font-family: HangangB;
`;

const SelectPosition = styled.select`
  width: 100%;
  margin: 10px 0;
  padding: 5px;
  outline: none;
  border-radius: 4px;
  border: 2px solid #f1eae3;
  font-family: Hangang;
`;

export default SetPosition;
