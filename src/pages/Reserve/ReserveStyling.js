import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(131.19deg, #f5f5f5 55.83%, #a5bac7 103.21%);
`;

export const Column = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: ${(props) => props.fontSize};
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
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Card = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  height: 100%;
  box-shadow: 0px 21px 35px rgba(165, 186, 199, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
