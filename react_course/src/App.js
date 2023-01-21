import "./App.css";
import { Header, Content } from "./Header";

function App() {
  let name = "Sambit";
  return (
    <div className="App">
      <Header />
      <h1>{name}</h1>
      <Content />
    </div>
  );
}

export default App;
