import { useState, memo, useMemo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";
import "./index";

export const App = memo(() => {
  console.log("App レンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const sum = useMemo(() => {
    console.log("sumレンダリング");
    return 1 + 3;
  }, []);

  return (
    <>
      <button
        onClick={onClickButton}
        className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white"
      >
        ボタン
      </button>
      <p>{num}</p>
      {/* ↓Propsとして関数を設定 */}
      <Child1 />
      <Child4 />
      {sum}
      <br />
      {sum}
      <br />
    </>
  );
});
