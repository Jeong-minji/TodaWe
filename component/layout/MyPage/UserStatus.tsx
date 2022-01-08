import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import StatusChip from "../../common/StatusChip/StatusChip";
import StatusColor from "./StatusColor";
import API, { TOKEN } from "../../../pages/config";

interface StatusListI {
  id: string;
  name: string;
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

const UserStatus: React.FC = () => {
  const [feeling, setFeeling] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const [statusList, setStatusList] = useState<object[]>([]);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [like, setLike] = useState<string>("0");
  const [introduce, setIntroduce] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetch("/data/MyPage/userStatusData.json")
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setFeeling(res.feeling);
        setStatus(res.status);
        setLike(res.like);
        setIntroduce(res.message);
        setColor(FeelingObj[res.feeling]);
      });

    fetch("/data/MyPage/statusList.json")
      .then((res) => res.json())
      .then((res) => setStatusList(res));

    // fetch(`${API.users}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: TOKEN,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.result);
    //     setName(res.result.kakaoProfile.name);
    //     setFeeling(res.result.status.feeling);
    //     setStatus(res.result.status.status);
    //     setLike("22");
    //     setIntroduce(res.result.message);
    //   });
  }, []);

  const handleIntroduce = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value);
  };

  const handleStatusChip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.id.toUpperCase());
  };

  const handleBtnSave = () => {
    fetch(`${API.users}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        status: status,
        feeling: feeling,
        message: introduce,
      }),
    }).then((res) => {
      res.status === 200
        ? alert("상태 수정이 완료되었습니다.")
        : alert("상태 수정에 실패하였습니다.");
    });
  };

  const handleColor = () => {
    // const feelings = Object.keys(FeelingObj);
    // let index = feelings.indexOf(feeling);
    // if (index === 2) index = 0;
    // else index++;
    // console.log(index);
  };

  return (
    <Wrapper>
      <UserProfile>
        <ProfileImage
          src="/images/logo_text.png"
          alt="profile_image"
          width={100}
          height={100}
        />
      </UserProfile>
      <SettingInfo>
        <Column>
          <Name>{name}</Name>
          <StatusInfo>
            <StatusColor handleColor={handleColor} color={color} />
            <Status>{StatusObj[status]}</Status>
          </StatusInfo>
          <LikeInfo>
            <LikeImage>💗</LikeImage>
            <Count>{like}</Count>
          </LikeInfo>
        </Column>
        <Column>
          <Introduce
            type="text"
            value={introduce}
            onChange={handleIntroduce}
            editMode={isEditing}
            readOnly={!isEditing}
            autoFocus={true}
          />
          {isEditing ? (
            <BtnDone onClick={() => setIsEditing(false)}>Done</BtnDone>
          ) : (
            <BtnEdit onClick={() => setIsEditing(true)}>Edit</BtnEdit>
          )}
        </Column>
        <Column>
          {statusList.map(({ id, name }: StatusListI) => {
            return (
              <StatusChip
                key={id}
                id={id}
                name={name}
                status={status}
                handleStatusChip={handleStatusChip}
              />
            );
          })}
        </Column>
      </SettingInfo>
      <BtnSave onClick={handleBtnSave}>Save</BtnSave>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
  padding: 40px;
  border-radius: 6px;
  background-color: #f1eae3;
  font-family: Hangang;
`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const ProfileImage = styled(Image)``;

const SettingInfo = styled.div`
  margin-left: 30px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const Name = styled.span`
  font-size: 36px;
`;

const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 80px;
  font-size: 18px;
`;

const Status = styled.span`
  margin: 0 10px;
`;

const LikeInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3px;
  font-size: 18px;
  margin-top: -4px;
`;

const LikeImage = styled.span`
  margin-right: 2px;
`;

const Count = styled.span``;

const Introduce = styled.input<{ editMode: boolean }>`
  margin-right: 10px;
  padding: 4px 10px 0px 10px;
  border: none;
  border-radius: 6px;
  outline: none;
  background: ${({ editMode }) => (editMode ? "white" : "transparent")};
  font-family: Hangang;
  font-size: 20px;
  transition: all 0.1s ease-in-out;
`;

const BtnDone = styled.button`
  border: none;
  background-color: transparent;
  font-family: Hangang;
  cursor: pointer;
`;

const BtnEdit = styled.button`
  border: none;
  background-color: transparent;
  font-family: Hangang;
  cursor: pointer;
`;

const BtnSave = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 8px 24px;
  color: white;
  border-radius: 4px;
  border: 2px solid #53c8c0;
  background-color: #53c8c0;
  font-size: 14px;
  font-family: HangangB;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #53c8c0;
    color: #53c8c0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default UserStatus;
