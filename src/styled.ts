import styled from "styled-components";

export const Game = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #73937e;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  color: #fe4a49;
  font-size: min(4vw, 70px);
  padding-top: 1%;
  font-family: "Courier New", Courier, monospace;
`;

export const Start = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background-color: #fed766;

  img {
    width: 80%;
    height: auto;
    max-height: 50%;
  }

  > div {
    display: flex;
    height: 50%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    p {
      margin-top: 40px;
      font-size: 30px;
      font-weight: bold;
    }
  }

  svg:nth-of-type(1) {
    height: 50%;
    z-index: 10;
    cursor: pointer;

    circle:nth-of-type(2) {
      stroke-width: 7;
      stroke-dasharray: 1;
      transition: stroke-dashoffset 0.6s ease-in-out;
    }

    :hover circle {
      stroke-dashoffset: 1;
    }

    circle:nth-of-type(1) {
      z-index: -1;
      stroke-width: 7;
      /* stroke-dasharray: 0.1; */
    }
  }

  svg:nth-of-type(2) {
    position: absolute;
    top: 25%;
    left: 25%;
    height: 25%;
  }
`;
