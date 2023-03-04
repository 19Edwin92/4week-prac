import React, { useEffect, useState } from 'react'

function Usememo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = isKorea ? "한국" : "외국";
  // useEffect 동작하지 않아서 이를 먼저 공부하고 오자. 
  useEffect(()=>{
    console.log('useEffect 호출')
  },[location])

  

  return (
    <div>
      <h2>하루에 몇끼 먹오요? {number}끼</h2>
      <input 
          type="number"
          value={number}
          onChange={(e)=> setNumber(Number(e.target.value))}/>
      <hr />
      <h2>어느 나라에 있어요</h2>
      <p>나라 : {location}</p>
      <button 
          onClick={()=>{setIsKorea(!isKorea)}}
          >비행기를 타자</button>
    </div>
  )
}

export default Usememo2