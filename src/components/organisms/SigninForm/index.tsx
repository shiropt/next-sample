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
    <Form name="signin" onSubmit={handleSubmit}>
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
        ログイン
      </ButtonWrapper>
    </Form>
  );
};

SigninForm.displayName = "SigninForm";

const Form = styled.form`
  width: 488px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled(Button)`
  margin-top: 16px;
  width: 100%;
  height: 48px;
`;
