import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { UserData } from "./Components/UserData";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
