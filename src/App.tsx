import * as React from "react";
import "./App.css";
import styled from "styled-components";
import { FC, useState } from "react";
import NoSleep from "nosleep.js";
import { DownArrow, UpArrow } from "./Arrows";

const StartButton = styled.div`
  width: 100%;
  height: 100vh;
  cursor: pointer;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  float: right;
  right: 50%;
  height: 100%;
`;

const TargetImage = styled.img`
  position: relative;
  right: -50%;
  height: 100%;
  filter: drop-shadow(6px 10px 8px rgba(0, 0, 0, 0.4));
  transition: filter 1s linear;
`;

const SetDiv = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: block;
  text-align: center;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8));
`;

const TimeDisplay = styled.span`
  color: white;
  font-family: Roboto, serif;
  font-size: 2rem;
  font-weight: bolder;
`;

const RemainingDiv = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8));
  pointer-events: none;
`;

const RemainingDisplay = styled.span`
  color: white;
  font-family: Roboto, serif;
  font-size: 12rem;
  font-weight: bolder;
  height: min-content;
`;

const App: FC = () => {
  const noSleep = new NoSleep();
  const [waitTime, setWaitTime] = useState(7);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timed, setTimed] = useState(false);
  let isFirstClick = true;
  const beep = new Audio(
    "data:audio/wav;base64,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"
  );

  const handleTimeIncrease = () => {
    setWaitTime(prev => prev + 1);
  };

  const handleTimeDecrease = () => {
    setWaitTime(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleClick = () => {
    setTimed(true);
    setRemainingTime(waitTime);

    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev === 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    if (isFirstClick) {
      noSleep.enable();
      isFirstClick = false;
    }

    setTimeout(async () => {
      await beep.play();
      setTimed(false);
    }, (waitTime + Math.random() * 5) * 1000);
  };

  return (
    <div className="App">
      <StartButton
        id="start-button"
        {...(timed
          ? {
              onClick: () => {},
              style: { cursor: "not-allowed", filter: "opacity(0.4)" }
            }
          : { onClick: handleClick, style: { cursor: "pointer" } })}
      >
        <ImageContainer>
          <TargetImage
            src={process.env.PUBLIC_URL + "/target.png"}
            id="target-image"
            alt="target"
          />
        </ImageContainer>
      </StartButton>
      <SetDiv>
        <UpArrow onClick={handleTimeIncrease} />
        <TimeDisplay>{waitTime}</TimeDisplay>
        <DownArrow onClick={handleTimeDecrease} />
      </SetDiv>
      <RemainingDiv>
        <RemainingDisplay>{remainingTime || null}</RemainingDisplay>
      </RemainingDiv>
    </div>
  );
};

export default App;
