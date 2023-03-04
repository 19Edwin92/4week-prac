import React, { useCallback, useState } from "react";
import Box1 from "./Box1";
// import Box1 from "./components/Box1";
// import Box2 from "./components/Box2";
// import Box3 from "./components/Box3";

const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};

function UseCallBack() {
  const [count, setCount] = useState(0);
  // console.log("화면이 리렌더링되며 Box1은 어떻게 될까요? (useCallback 이전)");

  // const initCount = () => {
  //   setCount(0);
  // };

  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다`)
    setCount(0);
  },[count]);

  // 1을 증가시키는 함수
  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  // 1을 감소시키는 함수
  const onMinusButtonClickHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>카운트 예제입니다!</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 initCount={initCount}/>
      </div>
    </div>
  );
}

export default UseCallBack;