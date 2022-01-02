import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface SortingValues {
  isOpen: boolean;
  theme: string;
  category: object[];
  toggleMenu: () => void;
  changeTheme: (e: any) => void;
}

const Sorting: React.FC<SortingValues> = ({
  isOpen,
  theme,
  category,
  toggleMenu,
  changeTheme,
}) => {
  // console.log(name);
  return (
    <SortingBox>
      <SortingTab onClick={() => toggleMenu()}>
        {theme}&nbsp;&nbsp;&nbsp;▼
      </SortingTab>
      <SortingContent content={isOpen}>
        {Object.keys(category).map((theme, idx) => (
          <SortingCategory key={idx} id={theme} onClick={changeTheme}>
            {Object.values(theme)}
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

const SortingContent = styled.ul<{ content: boolean }>`
  display: ${({ content }) => (content ? "" : "none;")};
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
