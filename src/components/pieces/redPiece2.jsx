import React from "react";
import styled from "styled-components";
import Page from "../../assets/pieces/red/page.svg";

const yellowPiece2 = () => {
  return (
    <Container>
      <Image src={Page} alt="page" />
    </Container>
  );
};

export default yellowPiece2;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 832px; 
  align-items: flex-start;
  justify-content: center;
  background-color: #f8f7f4;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto; 
`;

