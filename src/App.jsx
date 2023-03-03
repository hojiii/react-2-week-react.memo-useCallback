import React, { useCallback, useState } from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
//react.memo: 컴포넌트를 메모리재이션
//useCallback:함수를 메모리재이션
//useMemo: value를 메모리재이션(함수가 리턴하는값, 값자체)


function App() {
  console.log("App 컴포넌트가 렌더링 되었습니다.")
  const [count, setCount] = useState(0);


  //1증가
  const onPlusButtonClickHandler = () => {
    setCount(count +1)
  }
  //1감소
  const onMinusButtonClickHandler = () => {
    setCount(count -1)
  }

  //초기화 함수
  const resetButtonClickHandler = useCallback(() =>{
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0)
  }, [count]);//[]의존성 배열-> 특정스테이트가 변경될때 처음에 저장했던 콜백함수가 갱신되어야되면 의존성배열에 해당 state를 넣어야함 
  //숫자가 감소하고 증가하며 리랜더링 되면서 함수도 객체로 취급이 되기 떄문에 새로운 주소값이 생성
  //새로 생성된 주소 값을 props로 내려주기때문에 react에서는 함수값이 달라지지 않아도,porps가 달라졌다고 판단함으로 react.memo를 해놓아도 리랜더린된다. 이때이용하는 것이 useCallback

  return (
    <>
    <h3>카운트 예제입니다.</h3>
    <p>현재 카운트 : {count}</p>
    <button onClick={onPlusButtonClickHandler}>+</button>
    <button onClick={onMinusButtonClickHandler}>-</button>
    <div style={{
      display: 'flex',
      margintop: '10px',
    }}>
      <Box1 resetButtonClickHandler={resetButtonClickHandler}/>
      <Box2 />
      <Box3 />
    </div>
    </>
  )
}

export default App