"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { schemaObjects } from "../../../constants/validate";
import { useAuth } from "../../../libs/firebase/auth";
import { Box, Button, Container, Flex, Input, Text } from "@mantine/core";
import Link from "next/link";

type Props = {};

export const SigninForm: FC<Props> = (props) => {
  const { signin } = useAuth();

  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaObjects.signin,
    onSubmit: async (values) => {
      const res = await signin(values.email, values.password);
      console.log(res.user.displayName);
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
              ログイン
            </Button>
            <Button mb="lg" variant="outline" fullWidth type="submit">
              Googleでログイン
            </Button>
            <Flex justify="center">
              <Text color="blue" underline>
                <Link href="/signup">アカウントをお持ちでない方</Link>
              </Text>
            </Flex>
          </Box>
        </form>
      </Container>
    </Container>
  );
};

SigninForm.displayName = "SigninForm";
