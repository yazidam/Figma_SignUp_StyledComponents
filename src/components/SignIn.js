import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { Form, Terms } from "./Sidebar";

const SignIn = () => {
  return (
    <>
      <Form>
        <h3>Sign In</h3>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button>Sign In</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Forget Password ? <span>Forget</span>
        </h4>
      </div>
    </>
  );
};

export default SignIn;
