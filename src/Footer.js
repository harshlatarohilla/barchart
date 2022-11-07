import { Container } from "@chakra-ui/react";
import React from "react";

function Footer({ time }) {
  return (
    <Container mt={[2, 4, 6]} centerContent>
      Last checked : {time}{" "}
    </Container>
  );
}

export default Footer;
