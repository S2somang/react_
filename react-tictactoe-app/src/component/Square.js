import React from "react";
import "./Square.css";
// 함수형
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square

// 클레스형
// export default class Square extends React.Component {

//     render(){
//         return (
//             <button className="square" onClick={() => {this.props.onClick()}}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }
