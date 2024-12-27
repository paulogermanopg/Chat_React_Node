import styled from "styled-components";
import { motion } from "framer-motion";
import COLORS from '../../utils/colorUtils';

type STYLEDPROPS = {
  isUser: boolean;
};

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${COLORS.BLACK_ECLIPSE};
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 90px);
`;

export const MessageBubble = styled(motion.div)<STYLEDPROPS>`
  max-width: 70%;
  padding: 10px 15px;
  background-color: ${(props) => (props.isUser ? COLORS.PURPURA : COLORS.AZUL_TEMPESTADE)};
  color: ${(props) => (props.isUser ? COLORS.WHITE : COLORS.GRAY)};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  border-radius: 15px;
  border-top-right-radius: ${(props) => (props.isUser ? "0" : "15px")};
  border-top-left-radius: ${(props) => (!props.isUser ? "0" : "15px")};
  box-shadow: 0 4px 6px ${COLORS.BLACK_OPACITY};
`;

export const MessageAuthor = styled.span<STYLEDPROPS>`
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 5px;
  color:${(props) => props.isUser ? COLORS.LAVANDA : COLORS.AMETISTA};
`;

export const MessageText = styled.span`
  font-size: 1rem;
`;

export const Message = styled.div<STYLEDPROPS>`
  max-width: 60%;
  padding: 10px;
  border-radius: 20px;
  margin: 5px 0;
  background-color: ${(props) => (props.isUser ? COLORS.PURPURA : COLORS.AZUL_TEMPESTADE)};
  color: ${COLORS.WHITE};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  word-wrap: break-word;
  text-align: left;
  transition: border-radius 0.4s ease, max-width 0.4s ease;

  &:hover {
    border-radius: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${COLORS.INDIGO_PROFUNDO};
  border-top: 1px solid ${COLORS.AZUL_TEMPESTADE};
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${COLORS.AZUL_TEMPESTADE};
  color: ${COLORS.WHITE};
  margin-right: 10px;

  &::placeholder {
    color: ${COLORS.GRAY_FOSCO};
  }
`;

export const SendButton = styled.button`
  display: flex;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPURA};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${COLORS.AMETISTA};
    box-shadow: 0 4px 15px ${COLORS.AMETISTA_OPACITY};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TypingIndicator = styled.div`
  width: 100%;
  padding: 2px;
  font-size: 0.9rem;
  color: ${COLORS.WHITE};
  text-align: center;
  background-color: ${COLORS.AZUL_TEMPESTADE};
  border-top: 1px solid ${COLORS.PURPURA};
  position: relative;
  z-index: 1;
`;
