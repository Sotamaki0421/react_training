import { useState } from "react";
// import { ColoredMessage } from "./components/ColoredMessage";
// import { CssModules } from "./components/CssModules";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  console.log("レンダリング");

  // Stateの定義
  // const [num, setNum] = useState(0);
  // ボタンを押した時に実行する関数を定義
  // const onClickButton = () => {
  //   alert();
  // setNum((prev) => prev + 1);
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColoredMessage color="blue">お元気ですか？</ColoredMessage> */}
      {/* <ColoredMessage color="pink">元気です！</ColoredMessage> */}
      {/* <button onClick={onClickButton}>ボタン</button> */}
      {/* <CssModules /> */}
      {/* <p>{num}</p> */}
      <TailwindCss />
    </>
  );
};
