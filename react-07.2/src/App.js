
import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState(([]));// 처음엔 기본값으로 비어있는[]넘겨줘서 coin 0개
  const [myMoney , setMyMoney] = useState([]);
  // 아래에서 길이를 사용하고있어서 이부분 아무것도 안채워주면 
  // undefined로 에러남 그래서[]로 지정해줌
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false)
      });
  },[]); // 한번만 실행할거야, 아무것도 주시하고있지않으면([])

  const onChange = (event) => (
    setMyMoney(event.target.value)
  )


  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})` }</h1>
      <input
        onChange={onChange}
        value={myMoney}
      /> <br/>
      {loading ? <strong>Loading...</strong> : 
      ( // 이안에 넣으면 로딩하는 동안엔 안보이게됨
        <select>
          {coins.map((coin) => (
        <option>
          {coin.name} ({coin.symbol}) : {(myMoney / coin.quotes.USD.price).toPrecision(3)}
        </option>
          ))}
        </select>
      )
      }
      {/* <ul>
        {coins.map((coin) => (
        <li>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
