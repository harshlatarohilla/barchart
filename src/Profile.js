import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import validator from "validator";

function Profile({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (data) => {
    data.preventDefault();
    localStorage.setItem(email, name);
    // console.log(name, email, name);
    // console.log(localStorage.getItem(email));
    setIsLoggedIn(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    validator.isEmail(email)
      ? setMessage("")
      : setMessage("Enter correct email. ");
  };

  return (
    <Container pt={16} mt={[5, 10, 20]} width={[1, 1 / 2, 1 / 4]} centerContent>
      <form onSubmit={handleSubmit} required>
        <FormControl isRequired>
          <FormLabel ml={3} htmlFor="name">
            Username:{" "}
          </FormLabel>
          <Input
            width="auto"
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
            width="auto"
            rounded={19}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="jane@react.com"
            required
          />{" "}
        </FormControl>
        <Text pt={2} pl={3} color="red" position={"absolute"}>
          {message}
        </Text>
        <Center>
          <Button
            rounded={19}
            w="auto"
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
