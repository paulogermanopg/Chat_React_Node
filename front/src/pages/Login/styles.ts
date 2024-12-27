import styled from "styled-components";
import COLORS from '../../utils/colorUtils';

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const FormSection = styled.div`
  width: 33%;
  background: linear-gradient(135deg, ${COLORS.INDIGO_PROFUNDO}, ${COLORS.ANIL_PROFUNDO});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: ${COLORS.WHITE};

  @media (max-width: 880px) {
    flex: 1 1 100%;
  }
`;

export const BackgroundSection = styled.div`
  flex: 1;
  background: ${COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 880px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${COLORS.AMETISTA};
  text-shadow: 0 4px 10px ${COLORS.AMETISTA_OPACITY};
  margin-bottom: 2rem;
  font-family: 'Goldman'
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: ${COLORS.AZUL_TEMPESTADE};
  border: 2px solid ${COLORS.AMETISTA};
  border-radius: 5px;
  outline: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${COLORS.PURPURA};
    box-shadow: 0 0 8px ${COLORS.PURPURA};
  }
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PURPURA};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.AMETISTA};
    box-shadow: 0 4px 15px ${COLORS.AMETISTA_OPACITY};
  }

  &:active {
    transform: scale(0.95);
  }
`;
