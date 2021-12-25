import React from "react";
import styled from "styled-components";

interface SetClassI {
  getGeneration: (generation: string) => void;
}

const SetClass: React.FC<SetClassI> = ({ getGeneration }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    getGeneration(e.target.value);
  };

  return (
    <SetClassWrapper>
      <Title>Wecode 기수</Title>
      <ClassInput type="text" placeholder="ex) 25" onChange={handleInput} />
    </SetClassWrapper>
  );
};

const SetClassWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const Title = styled.h2`
  font-family: HangangB;
`;

const ClassInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 5px 10px;
  outline: none;
  border: 2px solid #f1eae3;
  border-radius: 4px;
  font-family: Hangang;
`;

export default SetClass;
