import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Alert, AlertIcon } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Box as="form" p={5} shadow="md" borderWidth="1px" onSubmit={handleFormSubmit}>
      {showAlert && (
        <Alert status="error">
          <AlertIcon />
          Something went wrong with your signup!
        </Alert>
      )}
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder="Your username" name="username" onChange={handleInputChange} value={userFormData.username} />
      </FormControl>

      <FormControl id="email" isRequired mt={6}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your email" name="email" onChange={handleInputChange} value={userFormData.email} />
      </FormControl>

      <FormControl id="password" isRequired mt={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Your password" name="password" onChange={handleInputChange} value={userFormData.password} />
      </FormControl>

      <Button colorScheme="teal" mt={6} type="submit" isDisabled={!(userFormData.username && userFormData.email && userFormData.password)}>
        Submit
      </Button>
    </Box>
  );
};

export default SignupForm;
