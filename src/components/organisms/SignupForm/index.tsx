"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { schemaObjects } from "../../../constants/validate";
import { useAuth } from "../../../libs/firebase/auth";
import { Button, Input } from "@mantine/core";

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
    <form name="signin" onSubmit={handleSubmit}>
      <Input {...getFieldProps("name")} />
      <Input {...getFieldProps("email")} />
      <Input {...getFieldProps("password")} />
      <Button variant="outline" type="submit">
        登録
      </Button>
    </form>
  );
};

SignupForm.displayName = "SigninForm";
