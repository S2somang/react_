import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import {useState, useEffect } from "react";
// 간단한 to-do list 만들기
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return;
    }
    // array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법
    setToDos(currentArray => [toDo, ...currentArray]);
    // toDo = "" // 절대!state를 직접적으로 수정하지 않음! 아래 function을 이용해서 고침
    setToDo("");// 값을 직접보내는중 // toDo값을 수정하는 함수 toDo는 input이랑 연결되어있음
    console.log(toDos);
  }
  return (
 <div>
   <h1>My To Do ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange = {onChange} value={toDo} type="text" placeholder ="write your to do..."/>
      <button>Add To Do</button>
    </form>
    <hr/>
    <ul>
      {toDos.map((item,index) => <li key={index}>{item}</li> )}
    </ul>
 </div>
 );
}

export default App;
