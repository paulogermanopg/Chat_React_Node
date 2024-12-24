import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";

type SocketMessage = {
  text: string;
  author_id: string;
  author: string;
};

type TypingMessage = {
  author_id: string;
  author: string;
};

export default function Chat() {
  const navigate = useNavigate();
  const messageRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [messageList, setMessageList] = useState<SocketMessage[]>([]);
  const [typingUsers, setTypingUsers] = useState<TypingMessage[]>([]);
  const socket = useSelector((state: RootState) => {
    return state.chat?.socket;
  });

  const handleTyping = () => {
    const message = messageRef?.current?.value;
    if (!message?.trim()) {
      handleStopTyping();
    } else {
      if (socket) socket.emit("typing");
    }
  };

  const handleStopTyping = () => {
    if (socket) socket.emit("stop_typing");
  };

  const sendMessage = () => {
    const message = messageRef?.current?.value;
    if (!message?.trim() || !socket) return;
    socket.emit("message", message);
    clearInput();
  };

  const clearInput = () => {
    if (messageRef.current) messageRef.current.value = "";
  };

  const getEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
      handleStopTyping();
    }
  };

  const scrollDown = () => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!socket) {
      navigate("/");
      return;
    }

    socket.on("receive_message", (data: SocketMessage) => {
      setMessageList((current) => [...current, data]);
    });

    socket.on("user_entered", (message: string) => {
      toast.info(message, { position: "top-center", autoClose: 3000 });
    });

    socket.on("user_left", (message: string) => {
      toast.warning(message, { position: "top-center", autoClose: 3000 });
    });

    return () => {
      socket.off("receive_message");
      socket.off("user_entered");
      socket.off("user_left");
    };
  }, [socket, navigate]);

  useEffect(() => {
    if (!socket) return;

    socket.on("user_typing", (data: TypingMessage) => {
      if (!typingUsers.some((user) => user.author_id === data.author_id)) {
        setTypingUsers((current) => [...current, data]);
      }
    });

    socket.on("user_stopped_typing", (data: { author_id: string }) => {
      setTypingUsers((current) =>
        current.filter((user) => user.author_id !== data.author_id)
      );
    });

    return () => {
      socket.off("user_typing");
      socket.off("user_stopped_typing");
    };
  }, [socket, typingUsers]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  return (
    <S.ChatContainer>
      <S.MessagesContainer>
        {messageList.map((message, index) => (
          <S.MessageBubble
            key={index}
            isUser={message.author_id === socket?.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <S.MessageAuthor isUser={message.author_id === socket?.id}>
              {message.author}
            </S.MessageAuthor>
            <S.MessageText>{message.text}</S.MessageText>
          </S.MessageBubble>
        ))}
        <div ref={bottomRef} />
      </S.MessagesContainer>

      <S.TypingIndicator>
        {typingUsers.map((user) => (
          <p key={user.author_id}>{user.author} está digitando...</p>
        ))}
      </S.TypingIndicator>

      <S.InputContainer>
        <S.InputField
          type="text"
          ref={messageRef}
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => {
            getEnterKey(e);
            handleTyping();
          }}
          onBlur={handleStopTyping}
        />
        <S.SendButton onClick={sendMessage}>
          <FiSend size={20} color="#fff" />
        </S.SendButton>
      </S.InputContainer>
      <ToastContainer />
    </S.ChatContainer>
  );
}
