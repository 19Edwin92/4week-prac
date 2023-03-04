import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(1);

  const handleCountUpdate = () => {
    setCount(count+1);
  };

  // 렌더링 될 때마다 실행됨
  useEffect(()=>{
    console.log('useEffect 호출');
  });

  return (
    <>
        <button onClick={handleCountUpdate}>update</button>
        <span> count : {count}</span>
    </>
  );
}

export default UseEffect