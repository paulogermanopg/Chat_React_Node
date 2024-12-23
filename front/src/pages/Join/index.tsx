import { useRef } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSocket } from "../../redux/slices/chatSlice";

export default function Join() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const userName = userNameRef?.current?.value;
    if (!userName?.trim()) return;
    const socket = await io("http://localhost:3001");
    socket.emit("set_username", userName);
    dispatch(setSocket(socket));
    navigate("/chat");
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={userNameRef} placeholder="nome do usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}
