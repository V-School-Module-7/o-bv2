import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(131.19deg, #f5f5f5 55.83%, #a5bac7 103.21%);
  padding: 0 5vw;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    gap: 3rem;
    grid-template-columns: 3fr 2fr;
    // padding: 0;
  }
  @media (min-width: 1200px) {
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    // padding: 3rem;
  }
  @media (min-width: 1200px) {
  }
`;

export const Text = styled.p`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize * 0.6}em` : '0.5em'};
  font-weight: ${(props) => props.fontWeight};
  margin: 0.8rem 0;
  margin-top: ${(props) => props.marginTop};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.textAlign};
  //   height: calc(${(props) => (props.fontSize ? props.fontSize : '1rem')});
  &:after {
    content: '';
    width: 100%;
    display: none;
  }
  @media (min-width: 480px) {
    font-size: ${(props) => `${props.fontSize * 0.7}em`};
  }
  @media (min-width: 768px) {
    font-size: ${(props) => `${props.fontSize * 0.8}em`};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => `${props.fontSize * 0.9}em`};
  }
  @media (min-width: 1200px) {
    font-size: ${(props) => `${props.fontSize * 1}em`};
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Img = styled.img`
  width: 100%;
  @media (min-width: 1024px) {
    min-width: 400px;
    max-width: 900px;
  }
`;

export const Card = styled.div`
  background-color: white;
  padding: 0.5rem 1.5rem;
  height: 100%;
  box-shadow: 0px 21px 35px rgba(165, 186, 199, 0.5);
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    width: 100%;
    min-width: 425px;
    max-width: 600px;
    min-height: 650px;
    padding: 1rem 2rem;
  }
  @media (min-width: 1200px) {
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 1rem;
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
