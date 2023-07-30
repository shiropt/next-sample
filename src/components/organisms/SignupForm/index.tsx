"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { schemaObjects } from "../../../constants/validate";
import { useAuth } from "../../../libs/firebase/auth";
import { Box, Button, Container, Flex, Input, Text } from "@mantine/core";
import Link from "next/link";

type Props = {};

export const SignupForm: FC<Props> = (props) => {
  const { signup } = useAuth();
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schemaObjects.signup,
    onSubmit: async (values) => {
      const response = await signup(values.name, values.email, values.password);
      console.log({ response });
    },
  });
  return (
    <Container mt={60} p={100} bg="white">
      <Container w={"80%"}>
        <form name="signin" onSubmit={handleSubmit}>
          <Input.Wrapper mb="lg" label="メールアドレス">
            <Input {...getFieldProps("email")} />
          </Input.Wrapper>
          <Input.Wrapper mb="lg" label="パスワード">
            <Input {...getFieldProps("password")} />
          </Input.Wrapper>
          <Box mt={50}>
            <Button mb="lg" fullWidth type="submit">
              新規登録
            </Button>
            <Button mb="lg" variant="outline" fullWidth type="submit">
              Googleで登録
            </Button>
            <Flex justify="center">
              <Text color="blue" underline>
                <Link href="/signin">アカウントをお持ちの方</Link>
              </Text>
            </Flex>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

SignupForm.displayName = "SigninForm";
