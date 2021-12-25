import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FriendsItem from "./FriendsItem";

interface FriendI {
  id: number;
  name: string;
  feeling: string;
  status: string;
  isLiked: boolean;
}

const RecommendFriends: React.FC = () => {
  const [friendsList, setFriendstList] = useState<FriendI[]>([]);

  useEffect(() => {
    fetch("/data/Main/friendsList.json")
      .then((res) => res.json())
      .then((res) => setFriendstList(res));
  }, []);

  return (
    <Wrapper>
      <Title>👑 CHINHAEJIGIL BARAE 👑</Title>
      <FriendsList>
        {friendsList.map(({ id, name, feeling, status, isLiked }) => {
          return (
            <FriendsItem
              key={id}
              id={id}
              name={name}
              feeling={feeling}
              status={status}
              isLiked={isLiked}
            />
          );
        })}
      </FriendsList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: AmaticSCB;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-top: 10px;
  padding: 10px 0;
`;

const FriendsList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export default RecommendFriends;
