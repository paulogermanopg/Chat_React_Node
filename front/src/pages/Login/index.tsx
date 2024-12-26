import { useRef } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSocket } from "../../redux/slices/chatSlice";
import Carousel from '../../components/Carousel';
import * as S from "./styles";

export default function Login() {
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
    <S.PageContainer>
      <S.FormSection>
        <S.FormContainer>
          <S.Title>React Chat</S.Title>
          <S.Input
            type="text"
            ref={userNameRef}
            placeholder="Insira seu nome"
          />
          <S.Button onClick={() => handleSubmit()}>Entrar</S.Button>
        </S.FormContainer>
      </S.FormSection>
      <S.BackgroundSection>
        <Carousel />
      </S.BackgroundSection>
    </S.PageContainer>
  );
}
