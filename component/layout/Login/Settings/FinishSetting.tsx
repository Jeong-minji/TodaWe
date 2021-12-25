import React from "react";
import styled from "styled-components";

const FinishSetting: React.FC = () => {
  return (
    <FinishSettingWrapper>
      <Welcome>Welcome</Welcome>
    </FinishSettingWrapper>
  );
};

const FinishSettingWrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const Welcome = styled.h1`
  font-family: Hangang;
`;

export default FinishSetting;
