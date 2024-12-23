import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Chat() {
  const messageRef = useRef<HTMLInputElement>(null);
  const [messageList, setMessageList] = useState<any[]>([]);
  const socket = useSelector((state: RootState) => {
    console.log("Estado Redux:", state); // Verifique o estado completo
    return state.chat?.socket;
  });

  const sendMessage = () => {
    const message = messageRef?.current?.value;
    if (!message?.trim() || !socket) return; // Verificar se o socket existe antes de usar
    socket.emit("message", message);
    clearInput();
  };

  const clearInput = () => {
    if (messageRef.current) messageRef.current.value = "";
  };

  useEffect(() => {
    console.log('aqui', socket);
    if (!socket) return; // Evitar executar o código se o socket for nulo

    socket.on("receive_message", (data: any) => {
      setMessageList((current) => [...current, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div>
      <h1>Chat</h1>
      {messageList.map((message, index) => (
        <p key={index}>
          {message.author}: {message.text}
        </p>
      ))}
      <input type="text" ref={messageRef} placeholder="Mensagem" />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}
