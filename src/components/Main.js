import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Conatiner>
      <h1>
        Join The <br /> Team
      </h1>
    </Conatiner>
  );
};

export default Main;

const Conatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
