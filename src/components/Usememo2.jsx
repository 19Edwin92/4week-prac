import React, { useEffect, useMemo, useState } from 'react'

function Usememo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 불변성이 유지될 때의 경우
  // const location = isKorea ? "한국" : "외국";

  // 불변성이 유지되지 않을 때의 경우
  const location = useMemo(()=>{
    return   {
      country : isKorea ? "한국" : "외국",
    };
  },[isKorea])

  
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
      <p>나라 : {location.country}</p>
      <button 
          onClick={()=>{setIsKorea(!isKorea)}}
          >비행기를 타자</button>
    </div>
  )
}

export default Usememo2