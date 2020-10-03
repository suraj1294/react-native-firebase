import * as yup from "yup";
export const signUpValidationSchema = () => {
  return yup.object().shape({
    userName: yup.string().label("Email Id").email().required(),
    password: yup.string().required("Password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("retype password"),
  });
};
