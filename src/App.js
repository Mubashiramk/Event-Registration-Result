import "./App.css";
import { UserData } from "./Components/UserData";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Result Page</h2>
      </div>
      <div>
        <h1>Registered Users</h1>
        <div className="userData">
          <UserData />
        </div>
      </div>
    </div>
  );
}

export default App;
