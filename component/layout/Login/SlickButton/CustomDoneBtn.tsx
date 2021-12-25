import React from "react";
import styled from "styled-components";
import API, { TOKEN } from "../../../../pages/config";

interface CustomDoneBtnI {
  setModalClose: () => void;
  user: string;
  position: string;
  generation: string;
}

const CustomDoneBtn: React.FC<CustomDoneBtnI> = ({
  setModalClose,
  user,
  position,
  generation,
}) => {
  const handleDone = () => {
    fetch(`${API.users}/addinfo`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        role: user,
        position: position,
        generation: generation,
      }),
    });

    setModalClose();
    window.location.replace("/");
  };

  return <DoneBtn onClick={handleDone}>완료</DoneBtn>;
};

const DoneBtn = styled.div`
  position: absolute;
  right: 25px;
  display: inline-block;
  margin: 0 5px;
  padding: 5px 15px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #f1eae3;
  font-family: Hangang;
`;

export default CustomDoneBtn;
