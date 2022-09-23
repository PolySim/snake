import React, { useState, useEffect } from "react";
import { Game } from "src/styled";
import StartView from "src/component/Start";

export default function GameView(): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Game
      style={
        width / 1.3 > 0.8 * height
          ? { width: 0.8 * height, height: 0.8 * height }
          : { width: width / 1.3, height: width / 1.3 }
      }
    >
      <StartView />
    </Game>
  );
}
