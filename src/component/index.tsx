import React from "react";
import { Title } from "src/styled";
import GameView from "src/container";

export default function App(): JSX.Element {
  return (
    <>
      <Title>PolySnake</Title>
      <GameView />
    </>
  );
}
