import styled from "styled-components";
import background from './wallpaper.jpg'

/////////////////// PROPS ///////////////////////

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
};

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean
};

/////////////////// GERAL ///////////////////////

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;


export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  z-index: ${(props) => (props.zIndex ? "1" : "")};
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;



////////////////////////// HOME ///////////////////////


export const MainContainer = styled.div<ContainerProps>`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw;
  background-color: #26547C;
`;

export const ContainerCards = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerCard = styled.div<ContainerProps>`
  margin: 30px 30px;
`;

export const ImgCard = styled.img`
    width: 300px;
    height: 300px;
`;

export const ButtonDetails = styled.button`
    font-size: 1.3rem;
    padding: 0.6em 1.6em;
    background-color: #E9190F;
    border: 3px solid black;
    border-radius: 1em;
    color: #fff;
    font-weight: bolder;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
    box-shadow: -5px 5px 0px 0px black;
    cursor: pointer;


    :hover {
    transform: translate(10px, -6px);
}

`;




// #26547C
// #E9190F
// #FCFCFC


////////////////////////// DETAILS ///////////////////////

export const MainContainerDetails = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.7)),url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ContainerDetails = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ImgDetails = styled.img`
    width: 400px;
    height: 400px;
   
`;

export const ContainerDescription = styled.div`
    width: 50%;
    margin-left: 60px;
`;

export const Description = styled.p`
    font-size: 30px;
    color: white;
`;