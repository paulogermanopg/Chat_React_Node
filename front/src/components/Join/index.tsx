import { useRef } from "react";
import { io } from "socket.io-client";

type JoinProps = {
  setChatVisibility: any;
  setSocket: any;
};

export default function Join(props: JoinProps) {
  const userNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const userName = userNameRef?.current?.value;
    if (!userName?.trim()) return;
    const socket = await io("http://localhost:3001");
    socket.emit("set_username", userName);
    props.setSocket(socket);
    props.setChatVisibility(true);
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={userNameRef} placeholder="nome do usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
