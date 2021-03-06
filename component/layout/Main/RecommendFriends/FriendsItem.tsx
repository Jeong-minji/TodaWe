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
  CODE: ["π»", " μ½λ©μ€"],
  OUT: ["π", " μΈμΆμ€"],
  EAT: ["π", " μμ¬μ€"],
  DRINK: ["πΊ", " μμ£Όμ€"],
  REST: ["π", " ν΄μμ€"],
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
      alert("λ‘κ·ΈμΈ ν μ μ λ§ μ΄μ©ν  μ μλ μλΉμ€μλλ€.");
    } else {
      setIsItemLiked(!isItemLiked);

      // idλ λ΄κ° μ’μμλ₯Ό λλ₯Έ μ μ  λλ²
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
        src="/images/rabbit.png"
        alt="profile_image"
        width={140}
        height={130}
      />
      <UserInfo>
        <StatusColor color={FeelingObj[feeling]}></StatusColor>
        <Name>{name}</Name>
        <StatusImage>{StatusObj[status][0]}</StatusImage>
      </UserInfo>
      <BtnLike onClick={handleBtnLike} isLiked={isItemLiked}>
        μ’μμ
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
