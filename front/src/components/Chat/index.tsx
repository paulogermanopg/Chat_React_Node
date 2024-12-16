import { useRef, useState, useEffect } from "react";

type ChatProps = {
  socket: any;
};

export default function Chat(props: ChatProps) {
  const messageRef = useRef<HTMLInputElement>(null);
  const [messageList, setMessageList] = useState<any>([]);

  const sendMessage = () => {
    const message = messageRef?.current?.value;
    if (!message?.trim()) return;
    props.socket.emit("message", message);
    clearInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  useEffect(() => {
    props.socket.on("receive_message", (data: any) => {
      setMessageList((current: any) => [...current, data]);
    });

    return () => props.socket.off('receive_message');
  }, [props.socket]);

  return (
    <div>
      <h1>Chat</h1>
      {
        messageList.map((message, index) => (
            <p key={index}>{message.author}: {message.text}</p>
        ))
      }
      <input type="text" ref={messageRef} placeholder="Mensagem" />
      <button onClick={() => sendMessage()}>Entrar</button>
    </div>
  );
}
