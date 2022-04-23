import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
  const { title, bgImage, description, leftButtonText, rightButtonText } =
    product;
  return (
    <PdContainer image={bgImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
      </ButtonGroup>
    </PdContainer>
  );
};

export default Product;

const ItemText = styled.div`
  padding-top: 10vh;
  text-align: center;
  h1 {
    font-size: 40px;
  }
  p {
    text-decoration: underline;
  }
`;
const PdContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url('/images/${props.image}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
`;
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
  height: 50px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 30px;
  font-size; 20px
  font-weight: 700;
`;
const RightButton = styled.div`
background-color: rgba(244, 244, 244, 0.65);
  height: 50px;
  width: 300px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 30px;
  font-size; 20px
  font-weight: 700;
`;
