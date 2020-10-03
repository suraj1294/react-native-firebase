import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Input,
  Form,
  Item,
  Text,
  Container,
  Content,
  Spinner,
  Icon,
} from "native-base";
import { Formik, FormikValues } from "formik";
import { SCREEN_HEIGHT } from "../../utils/constants";
import { getErrorMessage } from "../../firebase/util";
import {
  setAuthUser,
  setLoginStatus,
} from "../../store/actions/authentication";
import { authenticationInitialState } from "../../store/reducers";
import { AppState } from "../../store/appState";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signUpValidationSchema } from "./validations";
import { signUpWith } from "../../services/authentication";

interface SignUpForm {
  userName: string;
  password: string;
  rePassword: string;
}
interface LoginScreenProps {}

const SignUp: FC<LoginScreenProps> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLogging } = useSelector<
    AppState,
    typeof authenticationInitialState
  >((state) => state.authentication);
  const initialValues: SignUpForm = {
    userName: "",
    password: "",
    rePassword: "",
  };

  const handleSubmit = useCallback(
    async (values: FormikValues | SignUpForm) => {
      try {
        dispatch(setLoginStatus(true));
        const user = await signUpWith({
          email: values.userName,
          password: values.password,
        });
        dispatch(setLoginStatus(false));
        dispatch(setAuthUser(user));
      } catch (e) {
        dispatch(setLoginStatus(false));
        console.log(getErrorMessage("AUTH", e));
      }
    },
    []
  );

  return (
    <Container style={{ paddingTop: 30, height: 0.61 * SCREEN_HEIGHT }}>
      <Content style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          SIGN UP
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpValidationSchema()}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            isValid,
            setFieldTouched,
            touched,
            dirty,
            errors,
          }) => (
            <Form>
              <Item
                error={touched.userName && !!errors.userName}
                rounded
                success={touched.userName && !errors.userName}
                style={{ marginTop: 10 }}
              >
                <Icon type="AntDesign" name="user" />
                <Input
                  placeholder="Email"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("userName")}
                  value={values.userName}
                  label="Email"
                  onBlur={() => setFieldTouched("userName")}
                />
                {touched.userName && !errors.userName && (
                  <Icon name="checkmark-circle" />
                )}
              </Item>
              <View style={{ paddingLeft: 10 }}>
                {touched.userName && errors.userName && (
                  <Text style={{ color: "red" }}>{errors.userName}</Text>
                )}
              </View>

              <Item rounded style={{ marginTop: 20 }}>
                <Icon type="AntDesign" name="lock" />
                <Input
                  secureTextEntry
                  placeholder="Password"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
              </Item>
              <Item
                error={touched.rePassword && !!errors.rePassword}
                rounded
                success={touched.rePassword && !errors.rePassword}
                style={{ marginTop: 20 }}
              >
                <Icon type="AntDesign" name="lock" />
                <Input
                  secureTextEntry
                  placeholder="Retype Password"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("rePassword")}
                  value={values.rePassword}
                  onChange={() => setFieldTouched("rePassword")}
                />
                {touched.rePassword && !errors.rePassword && (
                  <Icon name="checkmark-circle" />
                )}
              </Item>

              {!isLogging ? (
                <Button
                  rounded
                  full
                  style={{ marginTop: 20, borderRadius: 20 }}
                  onPress={handleSubmit}
                  color="#4F6DE5"
                  disabled={!isValid || !touched || !dirty}
                >
                  <Text>SIGN UP</Text>
                </Button>
              ) : (
                <Spinner color="gray" />
              )}
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "gray" }}>
                    Already have an account?
                  </Text>
                </View>
                <Button
                  transparent
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={{ fontSize: 16 }}>SIGN IN</Text>
                </Button>
              </View>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignUp;
