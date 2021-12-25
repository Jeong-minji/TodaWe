import styled from "styled-components";
import BannerList from "../component/layout/Main/Banner/BannerList";
import RecommendFriends from "../component/layout/Main/RecommendFriends/RecommendFriends";

const Index = () => {
  return (
    <Wrapper>
      <BannerList />
      <RecommendFriends />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 300px;
`;

export default Index;
