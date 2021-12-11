import React, { useState } from "react";
import styled from "styled-components";

const CATEGORY = ["이름", "기분", "상태"];

const Sorting: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("정렬");

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const changeName = (e: any) => {
    // console.log(e.target.id);
    setName(e.target.id);
    setIsOpen((isOpen) => !isOpen);
  };

  // console.log(name);
  return (
    <SortingBox>
      <SortingTab onClick={() => toggleMenu()}>
        {name}&nbsp;&nbsp;&nbsp;▼
      </SortingTab>
      <SortingContent content={isOpen.toString()}>
        {CATEGORY?.map((name, idx) => (
          <SortingCategory key={idx} id={name} onClick={changeName}>
            {name}
          </SortingCategory>
        ))}
      </SortingContent>
    </SortingBox>
  );
};

export default Sorting;

const SortingBox = styled.div`
  display: block;
  justify-content: center;
`;

const SortingTab = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-family: Hangang;
`;

const SortingContent = styled.ul<{ content: string }>`
  display: ${({ content }) => (content == "true" ? "" : "none;")};
  position: absolute;
`;

const SortingCategory = styled.li`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-bottom: none;
  font-family: Hangang;
  background-color: #dfd2c4;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 1px solid black;
  }
`;
