import React, { useState, useEffect } from "react";
import { Game } from "src/styled";

export default function GameView(): JSX.Element {
  return (
    <Game
      style={{
        width: "500px",
        height: "500px",
      }}
    ></Game>
  );
}
