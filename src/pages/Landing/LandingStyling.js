import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  max-width: 100%;
  background: linear-gradient(131.19deg, #f5f5f5 55.83%, #a5bac7 103.21%);
  padding: 0 1rem;
  font-size: 1.3em;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
    padding: 0 2rem;
    height: 100vh;
  }
  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
  @media (min-width: 1200px) {
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: 0.8rem 0;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  justify-self: ${(props) => props.justifySelf};
  // letter-spacing: ${(props) => `${props.letterSpacing}rem`};
`;

export const ImgList = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2rem);
  max-width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 11rem;
  }
  @media (min-width: 1024px) {
    height: 14rem;
  }
  @media (min-width: 1200px) {
    height: 17rem;
  }
  @media (min-width: 1400px) {
    height: 20rem;
  }
`;

export const Img = styled.img``;

export const Card = styled.div`
  background-color: white;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 21px 35px rgba(165, 186, 199, 0.5);
  width: 100%;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
    width: auto;
    padding: 0.5rem 2.5rem;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 1rem 3rem;
  border: none;
  width: 100%;
  font-size: 1.5rem;
  transition: 0.2s ease;
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
