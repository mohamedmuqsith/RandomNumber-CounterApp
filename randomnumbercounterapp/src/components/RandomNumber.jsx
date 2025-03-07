import { useState } from "react";

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(0);
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }

  const generateRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <>
    <div className="randomnumberCounter">
      <h1 className="randomnumberCounter__h1">Random Number & Counter App</h1>
      <h1>Random Number</h1>
      <h1 className="randomnumber__h1">{randomNum}</h1>
      <div>
        <button className="randomnumber__btn" onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </div>
      <>
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={decrement} className="decrement">-</button>
        <span className="count">{count}</span>
        <button onClick={increment} className="increment">+</button>
      </div>
      </>
    </div>

    
    </>
    
  );
}

export { RandomNumber };