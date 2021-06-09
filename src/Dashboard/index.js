import React from "react";
import styled from "styled-components";
import SideMenuBar from "../Components/SideMenuBar";
import DashBoard from "../Dashboard/DashBoard";

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  svg {
    font-size: 2rem;
  }
  margin-top: 60px;
`;

function Home({ match }) {
  // useEffect(() => {
  //   setPieOptions((options) => ({
  //     ...options,
  //     series: [{ data: 14, name: "hi" }],
  //     labels:[]
  //   }));

  // }, []);

  return (
    <>
      <Container>
        <SideMenuBar />
        <DashBoard />
      </Container>
    </>
  );
}

export default Home;
