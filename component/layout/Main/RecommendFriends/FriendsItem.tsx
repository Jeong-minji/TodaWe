import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import API, { TOKEN } from "../../../../pages/config";

interface FriendsItemI {
  id: number;
  name: string;
  feeling: string;
  status: string;
  isLiked: boolean;
}

const FeelingObj = {
  GOOD: "#309C34",
  SOSO: "#E48413",
  BAD: "#FA4242",
};

const StatusObj = {
  CODE: ["💻", " 코딩중"],
  OUT: ["🚞", " 외출중"],
  EAT: ["🍗", " 식사중"],
  DRINK: ["🍺", " 음주중"],
  REST: ["🛌", " 휴식중"],
};

const FriendsItem: React.FC<FriendsItemI> = ({
  id,
  name,
  feeling,
  status,
  isLiked,
}) => {
  const [isItemLiked, setIsItemLiked] = useState<boolean>(isLiked);

  const handleBtnLike = () => {
    if (TOKEN === null) {
      alert("로그인 한 유저만 이용할 수 있는 서비스입니다.");
    } else {
      setIsItemLiked(!isItemLiked);

      // id는 내가 좋아요를 누른 유저 넘버
      // fetch(`${API.likes}/${id}`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: localStorage.getItem("token"),
      //   },
      // })
      //   .then((res) => res.json())
      //   .then((res) => console.log(res));
    }
  };

  return (
    <Wrapper>
      <ProfileImage
        src="/images/profile_rabbit.png"
        alt="profile_image"
        width={140}
        height={140}
      />
      <UserInfo>
        <StatusColor color={FeelingObj[feeling]}></StatusColor>
        <Name>{name}</Name>
        <StatusImage>{StatusObj[status][0]}</StatusImage>
      </UserInfo>
      <BtnLike onClick={handleBtnLike} isLiked={isItemLiked}>
        좋아요
      </BtnLike>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 30px 0px;
  border-radius: 10px;
  background-color: #f1eae3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ProfileImage = styled(Image)``;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const StatusColor = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  margin-top: -4px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Name = styled.span`
  margin: 0 8px 0 12px;
  font-size: 24px;
  font-family: HangangB;
`;

const StatusImage = styled.span`
  margin-top: -5px;
  font-size: 18px;
`;

const BtnLike = styled.button<{ isLiked: boolean }>`
  width: 80%;
  padding: 12px 0;
  border: none;
  border-radius: 20px;
  letter-spacing: 0.3em;
  cursor: pointer;
  font-size: 18px;
  font-family: Hangang;
  transition: all 0.2s ease-in;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${({ isLiked }) => (isLiked ? "white" : "black")};
  background-color: ${({ isLiked }) =>
    isLiked ? "#ed4e4e" : "rgba(255, 255, 255, 0.5)"};
`;

export default FriendsItem;
