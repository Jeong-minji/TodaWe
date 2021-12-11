import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FriendsBtn from "../component/layout/MyFriends/FriendsBtn";
import Search from "../component/layout/MyFriends/Search";
import Sorting from "../component/layout/MyFriends/Sorting";
import Ranker from "../component/layout/MyFriends/Ranker";

const MyFriends = () => {
  const [colleagueList, setColleagueList] = useState([]);

  useEffect(() => {
    fetch("data/colleague.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setColleagueList(data.colleague);
      });
  }, []);

  return (
    <Wrapper>
      <Title>👑&nbsp;&nbsp;Today’s MVP&nbsp;&nbsp;👑</Title>
      <RankerArea>
        <Ranker grade="1st" />
        <Ranker grade="2nd" />
        <Ranker grade="3rd" />
      </RankerArea>
      <BoxArea>
        <FriendsBox>
          <FriendsNav>
            <Search />
            <Sorting />
          </FriendsNav>
          <FriendsList>
            {colleagueList.map((friends, idx) => (
              <FriendsBtn key={idx} friends={friends} />
            ))}
          </FriendsList>
        </FriendsBox>
      </BoxArea>
    </Wrapper>
  );
};

export default MyFriends;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: AmaticSCB;
  font-weight: 400;
`;

const RankerArea = styled.div`
  /* display: flex; */
`;

const BoxArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendsBox = styled.div`
  width: 1235px;
  height: 480px;
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #dfd2c4;
  background-image: url("/images/logo_transparent.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FriendsNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 50px;
`;

const FriendsList = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 9px 0 9px;
`;
