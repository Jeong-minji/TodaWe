import React from "react";
import styled from "styled-components";

const Search: React.FC = () => {
  return (
    <SearchArea>
      <SearchBOx placeholder="🔎 &nbsp;검색어 입력" />
    </SearchArea>
  );
};

export default Search;

const SearchArea = styled.div`
  width: 180px;
  height: 30px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  font-family: Hangang;
  color: gray;
`;

const SearchBOx = styled.input`
  font-family: Hangang;
  font-size: 15px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
