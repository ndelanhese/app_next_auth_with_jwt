import React, { useContext } from 'react';

import type { NextPage } from 'next';

import { useForm } from 'react-hook-form';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { AuthContext } from '../contexts/AuthContexts';

type dataLoginProps = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<dataLoginProps>();
  const { signIn } = useContext(AuthContext);

  const handleSigIn = async (data: dataLoginProps) => {
    await signIn(data);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.600">
            to enjoy all of our cool <Link color="blue.400">features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded="lg"
          boxShadow="lg"
          p={8}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Stack spacing={4} as="form" onSubmit={handleSubmit(handleSigIn)}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                {...register('email')}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Email address"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                {...register('password')}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
                autoComplete="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Checkbox>Remember me</Checkbox>
                <Link color="blue.400">Forgot password?</Link>
              </Stack>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
export default Home;
