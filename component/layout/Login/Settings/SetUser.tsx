import React, { useState } from "react";
import styled from "styled-components";

interface SetUserI {
  getUser: (user: string) => void;
}

const SetUser: React.FC<SetUserI> = ({ getUser }) => {
  const getSelectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getUser(e.target.value);
  };

  return (
    <SetUserWrapper>
      <Title>수강생 / 멘토</Title>
      <SelectPosition
        name="position"
        defaultValue="default"
        onChange={getSelectedValue}
      >
        <option value="STUDENT">수강생</option>
        <option value="MENTOR">멘토</option>
      </SelectPosition>
    </SetUserWrapper>
  );
};

const SetUserWrapper = styled.div`
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

export default SetUser;
