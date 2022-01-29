import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} />
        <h3>
          Eli <span>Codes</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
      </Form>
    </Container>
  );
};

export default Sidebar;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
`;
const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;
const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
`;
