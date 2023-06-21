"use client";
import styled from "styled-components";
import { FC } from "react";
import { useFormik } from "formik";
import { TextBox } from "../../atoms/TextBox";
import { schemaObjects } from "../../../constants/validate";
import { Button } from "../../atoms/Button";
import { useAuth } from "../../../libs/firebase/auth";

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
    <Form name="signin" onSubmit={handleSubmit}>
      <TextBox
        label="名前"
        error={touched.name ? errors.name : ""}
        {...getFieldProps("name")}
      />
      <TextBox
        label="Eメール"
        error={touched.email ? errors.email : ""}
        {...getFieldProps("email")}
      />
      <TextBox
        label="パスワード"
        error={touched.password ? errors.password : ""}
        {...getFieldProps("password")}
      />
      <ButtonWrapper variant="Important" type="submit">
        登録
      </ButtonWrapper>
    </Form>
  );
};

SignupForm.displayName = "SigninForm";

const Form = styled.form`
  width: 488px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled(Button)`
  margin-top: 16px;
  width: 100%;
  height: 48px;
`;
