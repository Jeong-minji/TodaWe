import React from "react";
import styled from "styled-components";
import Image from "next/image";
import API from "../../../../pages/config";

declare global {
  interface Window {
    Kakao?: any;
  }
}

interface SocialLoginI {
  getUserSignIn: (isSignIn: boolean) => void;
  getInitSetting: (isSetted: boolean) => void;
}

const SocialLogin: React.FC<SocialLoginI> = ({
  getUserSignIn,
  getInitSetting,
}) => {
  const loginWithKakao = () => {
    const { Kakao } = window;

    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_INIT_KEY);

    Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email",
      success: (authObj) => {
        fetch(`${API.users}/login`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("token", res.token);
            getInitSetting(
              res.message === "NOT_ENOUGH_INFORMATION" ? false : true
            );
          });

        Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            getUserSignIn(true);
          },
        });
      },
    });
  };

  return (
    <BtnKakaoLogin onClick={loginWithKakao}>
      <Image
        src="/images/kakao_login_medium_narrow.png"
        alt="kakao_image"
        width="150"
        height="40"
      />
    </BtnKakaoLogin>
  );
};

const BtnKakaoLogin = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default SocialLogin;
