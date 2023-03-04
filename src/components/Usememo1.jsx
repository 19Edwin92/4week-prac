import React, { useMemo, useState } from 'react'

const hardCalurate = (number) => {
  console.log('답답한 계산기');
  for (let i=0; i<500000000; i++) {} // 단순하게 반복문이 5억번 실행될 때까지 기다리는 시간이라고 하자. 
  return number+10000
}

const easyCalurate = (number) => {
  console.log('빠른 계산기');
  return number+1
}

function Usememo1() {
  const [hardNumber, setHardNumber] = useState(0)
  const [easyNumber, setEasyNumber] = useState(0)
  // const hardSum = hardCalurate(hardNumber)
  const hardSum = useMemo(()=>{
    return hardCalurate(hardNumber)
  }, [hardNumber])

  const easySum = easyCalurate(easyNumber)
  return (
    <div>
      <h3>답답한 계산기</h3>
      <input 
          type="number"
          value={hardNumber}
          onChange={(e)=> setHardNumber(Number(e.target.value))}
          step="1"/>
      <span>+10000 = {hardSum}</span>
      <hr />
      <h3>빠른 계산기</h3>
      <input 
          type="number"
          value={easyNumber}
          onChange={(e)=> setEasyNumber(Number(e.target.value))}
          step="1"/>
      <span>+1 = {easySum}</span>
    </div>
  )
}

export default Usememo1