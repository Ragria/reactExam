import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '고기'

  let [title, titleModi] = useState(['남자 코트 추천1', '남자 코트 추천2', '남자 코트 추천']); //변수 대신 쓸수 있는 저장공간 import 필요
  let [good, goodModi] = useState(0);

  function titleModify(){
    var newArray = [...title]; // deepCopy
    newArray[0] = '여자 코트 추천'

    titleModi(newArray);
  }

  // function titleModify(){
  //   var newArray = [...title]; // deepCopy
  //   newArray.sort()

  //   titleModi(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>리액트 연습</div>
      </div>
      <button onClick={titleModify}>버튼</button>
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{goodModi(good + 1)}}>👍</span> {good} </h3>
        <p>2월 17일 방행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 방행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 방행</p>
        <hr/>
      </div>

      <Modal/>
      
    </div>
  );
}


function Modal() { //관습 Component는 대문자부터 시작
  return(
    <> 
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
