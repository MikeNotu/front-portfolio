import { useState, useEffect } from "react";
import "../App.scss";
const TestComponent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   alert("Actualizado");
  // });

  // useEffect(() => {
  //   alert("Primera vez!");
  // }, [counter]);

  useEffect(() => {
    fetch("https://api.chess.com/pub/leaderboards")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.live_blitz);
      });
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Agregar Counter
      </button>

      {counter}
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Agregar Counter
      </button>

      {counter2}

      <br />
      <br />
      <br />
      <br />
      {data.hasOwnProperty(100000) ? (
        JSON.stringify(data[0])
      ) : (
        <h1 className="">No existe eso amigo</h1>
      )}
    </div>
  );
};

export default TestComponent;
