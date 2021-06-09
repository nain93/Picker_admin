import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import SideMenuBar from "../Components/SideMenuBar";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  color: black;
  svg {
    font-size: 2rem;
  }
  margin-top: 60px;
`;

const DetailBox = styled.div`
  width: 80%;
  margin-left: 20%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  background-color: #fafafa;
`;

function index() {
  return (
    <Container>
      <SideMenuBar />
      <DetailBox>
        <Nav />
        <div>Token</div>
      </DetailBox>
    </Container>
  );
}

export default index;
