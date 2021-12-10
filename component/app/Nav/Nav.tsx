import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Nav: React.FC = () => {
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
          <a>MENTOR</a>
        </Link>
        <Link href="/colleague" passHref>
          <a>COLLEAGUE</a>
        </Link>
        <Link href="/mypage" passHref>
          <a>HOW DO YOU FEEL?</a>
        </Link>
      </Section>
      <Section rowNum="3">
        <BtnLogin>LOGIN</BtnLogin>
      </Section>
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

const BtnLogin = styled.button`
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  font-family: AmaticSCB;
  font-size: 25px;
`;

export default Nav;
