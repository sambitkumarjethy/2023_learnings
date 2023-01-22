import "./App.css";
import Student from "./component/Student";
function App() {
  let name = "Props Tutorial";
  return (
    <div className="App">
      {name}
      <Student name="Sambit" age={30} />
      <Student name="Rashmi" age={32} />
      <Student name="Chitta" age={35} />
      <Student />
    </div>
  );
}

export default App;
