import React from 'react';
import "./Board.css";
import Square from './Square';

const Board = ({squares, onClick}) => {

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />
    }

    return (
        <div className='board-wrapper'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
        </div>
    )
          
}

export default Board

// export default class Board extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             squares :Array(9).fill(null),
//         } 
//      }

//     handleClick(i) {
//         const squares = this.state.squares.slice(); // 모든 배열 새롭게 복사
//         squares[i] = 'X';
//         this.setState({squares : squares});
//     }

//     renderSquare(i) {
//         return <Square value={this.state.squares[i]} onclick={() => this.handleClick(i)}/>
//     }
  
//     render() {
//     return (
//       <div>
//         <div className='status'>Next Player: X, O</div>
//         <div className='board-row'>
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//         </div>
//         <div className='board-row'>
//         {this.renderSquare(3)}
//         {this.renderSquare(4)}
//         {this.renderSquare(5)}
//         </div>
//         <div className='board-row'>
//         {this.renderSquare(6)}
//         {this.renderSquare(7)}
//         {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }
