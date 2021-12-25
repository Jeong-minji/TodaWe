import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import SetPosition from "./SetPosition";
import CustomNextBtn from "../SlickButton/CustomNextBtn";
import CustomPrevBtn from "../SlickButton/CustomPrevBtn";
import CustomDoneBtn from "../SlickButton/CustomDoneBtn";
import SetClass from "./SetClass";
import SetUser from "./SetUser";
import FinishSetting from "./FinishSetting";

interface SetInfoI {
  setModalClose: () => void;
}

const SetInfo: React.FC<SetInfoI> = ({ setModalClose }) => {
  const [currentSlide, setCurrentSlide] = useState<Number>(0);
  const [user, setUser] = useState<string>("STUDENT");
  const [position, setPosition] = useState<string>("FRONT");
  const [generation, setGeneration] = useState<string>("");

  const slickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: Number) => {
      setCurrentSlide(current);
    },
    prevArrow: currentSlide === 0 ? null : <CustomPrevBtn />,
    nextArrow:
      user === "STUDENT" ? (
        currentSlide === 3 ? (
          <CustomDoneBtn
            setModalClose={setModalClose}
            user={user}
            position={position}
            generation={generation}
          />
        ) : (
          <CustomNextBtn />
        )
      ) : currentSlide === 2 ? (
        <CustomDoneBtn
          setModalClose={setModalClose}
          user={user}
          position={position}
          generation={generation}
        />
      ) : (
        <CustomNextBtn />
      ),
  };

  const getUser = (user: string) => {
    setUser(user);
    if (user === "MENTOR") setGeneration("");
  };

  const getPosition = (position: string) => {
    setPosition(position);
  };

  const getGeneration = (generation: string) => {
    setGeneration(generation);
  };

  return (
    <SetInfoWrapper>
      <StyledSlider {...slickSettings}>
        <SetPosition getPosition={getPosition} />
        <SetUser getUser={getUser} />
        {user === "STUDENT" ? <SetClass getGeneration={getGeneration} /> : null}
        <FinishSetting />
      </StyledSlider>
    </SetInfoWrapper>
  );
};

const SetInfoWrapper = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
`;

export default SetInfo;
