import React from "react";
import { Container, Header, HeaderTitle, Total } from "./styled";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  );
};

export default ResumeItem;
