import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FriendsBtn = ({ friends }) => {
  return (
    <BtnArea>
      <FeelBox feel={friends.status} />
      {friends.grade}&nbsp;
      {friends.name}
      <PlaceBox>
        {friends.feeling === "CODE"
          ? "💻"
          : friends.feeling === "OUT"
          ? "🚞"
          : friends.feeling === "EAT"
          ? "🍗"
          : friends.feeling === "DRINK"
          ? "🍺"
          : "🛌"}
      </PlaceBox>
    </BtnArea>
  );
};

export default FriendsBtn;

const BtnArea = styled.div`
  width: 260px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
  background-color: #f1eae3;
  color: black;
  font-size: 25px;
  font-family: Hangang;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const FeelBox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${({ feel }) => {
    if (feel === "GOOD") {
      return "green;";
    } else if (feel === "SOSO") {
      return "yellow;";
    } else {
      return "red;";
    }
  }};
`;

const PlaceBox = styled.div`
  margin-left: 20px;
  font-size: 25px;
`;
