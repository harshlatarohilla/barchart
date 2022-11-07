import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Profile({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (data) => {
    data.preventDefault();
    localStorage.setItem(email, name);
    console.log(name, email, name);
    console.log(localStorage.getItem(email));
    setIsLoggedIn(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container pt={16} mt={20} maxW="container.md" centerContent>
      <form onSubmit={handleSubmit} isrequired>
        <FormControl isRequired>
          <FormLabel ml={3} htmlFor="name">
            Username:{" "}
          </FormLabel>
          <Input
            rounded={19}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            placeholder="Jane Doe"
            required
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel ml={3} mt={6} htmlFor="email" isRequired>
            Email:
          </FormLabel>
          <Input
            rounded={19}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="jane@react.com"
            required
          />
        </FormControl>
        <Center>
          <Button
            rounded={19}
            w="full"
            mt={10}
            colorScheme={"teal"}
            variant="solid"
            type="submit"
          >
            Submit
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default Profile;
