import React from "react";
import styled from "styled-components";

interface StatusChipI {
  id: string;
  name: string;
  status: string;
  handleStatusChip: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StatusChip: React.FC<StatusChipI> = (props) => {
  return (
    <>
      <RadioButton
        type="radio"
        id={props.id}
        value={props.name}
        name="status"
        checked={props.status.toLocaleLowerCase() === props.id}
        onChange={props.handleStatusChip}
      />
      <TagLabel htmlFor={props.id}>{props.name}</TagLabel>
    </>
  );
};

const RadioButton = styled.input`
  display: none;

  &:checked + label {
    background-color: #cb7e37;
  }
`;

const TagLabel = styled.label`
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 17px;
  cursor: pointer;
  color: black;
  font-family: Hangang;
  background-color: white;
  transition: all 0.1s ease-in;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default StatusChip;
