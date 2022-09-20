import "./App.css";
import MyName from "./components/MyName/MyName";
import Sum from "./services/Sum";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          alert(Sum(3, 5));
        }}
      >
        Suma de 3 y 5
      </button>
      <MyName />
    </div>
  );
}

export default App;
