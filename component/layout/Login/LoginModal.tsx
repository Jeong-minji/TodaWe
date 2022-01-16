import React, { useState } from "react";
import styled from "styled-components";

import SocialLogin from "./Settings/SocialLogin";
import SetInfo from "./Settings/SetInfo";

interface LoginModalI {
  isVisible: boolean;
  setModalClose: () => void;
}

const LoginModal: React.FC<LoginModalI> = ({ isVisible, setModalClose }) => {
  const [isUserSignIn, setIsUserSignIn] = useState<boolean>(false);
  const [isInitted, setIsInitted] = useState<boolean>(false);

  const getUserSignIn = (isSignIn: boolean) => {
    setIsUserSignIn(isSignIn);
  };

  const getInitSetting = (isSetted: boolean) => {
    setIsInitted(isSetted);
  };

  return (
    <OutBackground isVisible={isVisible}>
      <ModalWrapper>
        <LogoArea>
          <Logo src="/images/logo_text.png" />
        </LogoArea>
        <ContentArea>
          <BtnClose className="fas fa-times" onClick={setModalClose}></BtnClose>
          {isUserSignIn ? (
            isInitted ? (
              window.location.replace("/")
            ) : (
              <SetInfo setModalClose={setModalClose} />
            )
          ) : (
            <SocialLogin
              getUserSignIn={getUserSignIn}
              getInitSetting={getInitSetting}
            />
          )}
        </ContentArea>
      </ModalWrapper>
    </OutBackground>
  );
};

const OutBackground = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const ModalWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.15);
`;

const LogoArea = styled.div`
  padding: 25px 0;
  background-color: #f1eae3;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Logo = styled.img`
  width: 150px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
`;

const BtnClose = styled.i`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export default LoginModal;
