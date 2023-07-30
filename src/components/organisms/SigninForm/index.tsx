"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { schemaObjects } from "../../../constants/validate";
import { useAuth } from "../../../libs/firebase/auth";
import { Button, Input, Text } from "@mantine/core";

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
    <form name="signin" onSubmit={handleSubmit}>
      <Input {...getFieldProps("email")} />
      <Input {...getFieldProps("password")} />
      <Button variant="outline" type="submit">
        ログイン
      </Button>
    </form>
  );
};

SigninForm.displayName = "SigninForm";
