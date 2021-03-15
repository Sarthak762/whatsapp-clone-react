import "./App.css";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
}

export default App;
