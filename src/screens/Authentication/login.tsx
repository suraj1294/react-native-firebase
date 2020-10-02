import React, { FC, useCallback, useState } from "react";
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
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Formik, FormikValues } from "formik";
import { SCREEN_HEIGHT } from "../../utils/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signInWith } from "../../services/authentication";
import { getErrorMessage } from "../../firebase/util";
import {
  setAuthUser,
  setLoginStatus,
} from "../../store/actions/authentication";
import { authenticationInitialState } from "../../store/reducers";
import { AppState } from "../../store/appState";

interface LoginForm {
  userName: string;
  password: string;
}
interface LoginScreenProps {}

const Login: FC<LoginScreenProps> = () => {
  const dispatch = useDispatch();
  const { isLogging } = useSelector<
    AppState,
    typeof authenticationInitialState
  >((state) => state.authentication);
  const [showPass, setShowPass] = useState(false);
  const initialValues: LoginForm = { userName: "", password: "" };

  const handleSubmit = useCallback(async (values: FormikValues | LoginForm) => {
    try {
      dispatch(setLoginStatus(true));
      const user = await signInWith({
        email: values.userName,
        password: values.password,
      });
      dispatch(setLoginStatus(false));
      dispatch(setAuthUser(user));
    } catch (e) {
      dispatch(setLoginStatus(false));
      console.log(getErrorMessage("AUTH", e));
    }
  }, []);

  return (
    <Container style={{ top: 50, height: 0.61 * SCREEN_HEIGHT }}>
      <Content style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          Log In
        </Text>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form>
              <Item rounded style={{ marginTop: 10 }}>
                <AntDesign
                  name="user"
                  style={{ paddingLeft: 5 }}
                  size={20}
                  color="black"
                />
                <Input
                  placeholder="Username"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                  label="username"
                />
              </Item>
              <Item rounded style={{ marginTop: 20 }}>
                <AntDesign
                  name="lock"
                  style={{ paddingLeft: 5 }}
                  size={20}
                  color="black"
                />
                <Input
                  secureTextEntry={!showPass}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <Feather
                      name="eye"
                      size={24}
                      color="black"
                      style={{ paddingRight: 10 }}
                    />
                  ) : (
                    <Feather
                      name="eye-off"
                      size={24}
                      color="black"
                      style={{ paddingRight: 10 }}
                    />
                  )}
                </TouchableOpacity>
              </Item>
              {!isLogging ? (
                <Button
                  rounded
                  full
                  bordered
                  style={{ top: 20, borderRadius: 20 }}
                  onPress={handleSubmit}
                >
                  <Text>Sign In</Text>
                </Button>
              ) : (
                <Spinner color="gray" />
              )}
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
