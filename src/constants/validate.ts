import * as Yup from "yup";
const schema = {
  password: Yup.string()
    .required("パスワードは必須項目です")
    .min(8, "パスワードは8文字以上で入力してください")
    .matches(/[0-9]/, "パスワードには数字を含めてください")
    .matches(/[a-z]/, "パスワードには小文字を含めてください")
    .matches(/[A-Z]/, "パスワードには大文字を含めてください")
    .matches(/[^\w]/, "パスワードには記号を含めてください"),
  email: Yup.string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスは必須項目です"),
  name: Yup.string().required("名前は必須項目です"),
};

const { email, password, name } = schema;

export const schemaObjects = {
  signin: Yup.object({
    email,
    password,
  }),
  signup: Yup.object({
    name,
    email,
    password,
  }),
};
