import styled, { keyframes } from 'styled-components';
import logo from '../../images/logo.png';

const logoRotateAnimation = keyframes`
0% { transform:rotate(0deg); opacity: 1 }
25% { transform:rotate(-90deg); opacity: 0.5 }
50% { transform:rotate(-180deg); opacity: 0.25 }
75% { transform:rotate(-270deg); opacity: 0.5}
100% { transform:rotate(-360deg); opacity: 1 }
`;

export const LoginPageWrapper = styled.div`
  padding: 0 1.25rem;
`;

export const Logo = styled.div`
  width: 7rem;
  height: 7rem;
  margin: 6.25rem auto 0 auto;
  border-radius: 50%;
  background-image: url(${logo});
  background-size: cover;
  animation: ${logoRotateAnimation} 4s linear infinite;
`;

export const LoginTitleWrapper = styled.div`
  display: flex;
  jutisfy-content: center;
  align-items: center;
  margin-top: 7rem;
`;

export const LoginTitle = styled.div`
  padding: 0 0.5rem;
  flex-shrink: 0;
  font-size: 1rem;
`;

export const TitleLine = styled.div`
  width: 100%;
  height: 0;
  border-top: #ccc solid 0.06rem;
`;

export const LoginRowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  jutisfy-content: center;
  align-items: center;
`;

export const LoginBtn = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  cursor: pointer;
`;
