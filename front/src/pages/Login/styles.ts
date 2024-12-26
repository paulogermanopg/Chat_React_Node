import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const FormSection = styled.div`
  width: 33%;
  background: linear-gradient(135deg, #1e1e2f, #2a2a40);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;

  @media (max-width: 880px) {
    flex: 1 1 100%;
  }
`;

export const BackgroundSection = styled.div`
  flex: 1;
  background: #000;
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
  color: #9b59b6;
  text-shadow: 0 4px 10px rgba(155, 89, 182, 0.5);
  margin-bottom: 2rem;
  font-family: 'Goldman'
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #2e2e3e;
  border: 2px solid #9b59b6;
  border-radius: 5px;
  outline: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #8e44ad;
    box-shadow: 0 0 8px #8e44ad;
  }
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #8e44ad;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9b59b6;
    box-shadow: 0 4px 15px rgba(155, 89, 182, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;
