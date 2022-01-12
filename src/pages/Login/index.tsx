import React from "react";
import {
  Container,
  Content,
  Description,
  LogoOne,
  LogoTwo,
  SignUp,
} from "./styles";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
};

export default LoginPage;
