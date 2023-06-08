"use client";
import styled from "styled-components";
import { FC } from "react";
import { useFormik } from "formik";
import { TextBox } from "../../atoms/TextBox";
import { schemaObjects } from "../../../constants/validate";
import { Button } from "../../atoms/Button";

type Props = {};

export const SigninForm: FC<Props> = (props) => {
  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaObjects.signin,
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper
        label="Eメール"
        error={touched.email ? errors.email : ""}
        {...getFieldProps("email")}
      />
      <TextBoxWrapper
        label="パスワード"
        error={touched.password ? errors.password : ""}
        {...getFieldProps("password")}
      />
      <ButtonWrapper variant="Important" type="submit">
        ログイン
      </ButtonWrapper>
    </Form>
  );
};

SigninForm.displayName = "SigninForm";

const Form = styled.form`
  width: 488px;
  /* height: 220px; */
  /* padding: 16px; */
  box-sizing: border-box;
`;
const TextBoxWrapper = styled(TextBox)`
  /* margin-bottom: 24px; */
`;

const ButtonWrapper = styled(Button)`
  /* margin-top: 24px; */
  width: 100%;
`;
