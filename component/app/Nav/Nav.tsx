import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "../../layout/Login/LoginModal";

const Nav: React.FC = () => {
  const router = useRouter();
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [isTokenSaved, setIsTokenSaved] = useState<boolean>(false);

  const handleBtnLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const setModalOpen = () => {
    setIsModalOn(true);
  };

  const setModalClose = () => {
    setIsModalOn(false);
  };

  useEffect(() => {
    setIsTokenSaved(localStorage.getItem("token") ? true : false);
  }, []);

  return (
    <NavWrapper>
      <Section rowNum="1">
        <Logo src="/images/logo_no_text.png" alt="l" width={50} height={50} />
        <Link href="/" passHref>
          <LogoName>TODAWE</LogoName>
        </Link>
      </Section>
      <Section rowNum="2">
        <Link href="/mentor" passHref>
          <LinkText page="/mentor" currentPath={router.pathname}>
            MENTOR
          </LinkText>
        </Link>
        <Link href="/colleague" passHref>
          <LinkText page="/colleage" currentPath={router.pathname}>
            COLLEAGUE
          </LinkText>
        </Link>
        <Link href="/mypage" passHref>
          <LinkText page="/mypage" currentPath={router.pathname}>
            HOW DO YOU FEEL?
          </LinkText>
        </Link>
      </Section>
      <Section rowNum="3">
        {isTokenSaved ? (
          <BtnLogout onClick={handleBtnLogout}>LOGOUT</BtnLogout>
        ) : (
          <BtnLogin onClick={setModalOpen}>LOGIN</BtnLogin>
        )}
      </Section>
      <LoginModal isVisible={isModalOn} setModalClose={setModalClose} />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  background-color: #f1eae3;
  font-family: AmaticSCB;
`;

const Section = styled.div<{ rowNum: string }>`
  display: flex;
  justify-content: ${({ rowNum }) =>
    rowNum === "2" ? "space-evenly" : "center"};
  align-items: center;
  flex: ${({ rowNum }) => (rowNum === "2" ? 5 : 1)};
  font-size: 25px;
`;

const Logo = styled(Image)``;

const LogoName = styled.a`
  margin-left: 10px;
  font-size: 28px;
  cursor: pointer;
`;

const LinkText = styled.a<{ page: string; currentPath: string }>`
  border-bottom: ${({ page, currentPath }) =>
    page === currentPath ? "2px solid black" : 0};

  &:hover {
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      flex: 1;
      height: 1px;
      transition: background-color 1s ease-out;
      background-color: black;
      border: 1px solid red;
    }
  }
`;

const BtnLogin = styled.button`
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  font-family: AmaticSCB;
  font-size: 25px;
`;

const BtnLogout = styled.button`
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  font-family: AmaticSCB;
  font-size: 25px;
`;

export default Nav;
