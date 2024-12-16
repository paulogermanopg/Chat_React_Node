import { useState } from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  const [chatVisibility, setChatVisibility] = useState<boolean>(false);
  const [socket, setSocket] = useState<any>(null);

  return (
    <div>
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;
