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
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface LoginForm {
  userName: string;
  password: string;
}
interface LoginScreenProps {}

const Login: FC<LoginScreenProps> = () => {
  const navigation = useNavigation();
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
    <Container
      style={{
        paddingTop: 30,
        height: 0.61 * SCREEN_HEIGHT,
      }}
    >
      <Content style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          LOG IN
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
                  placeholder="Email"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                  label="Email"
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
              <View
                style={{
                  paddingTop: 5,

                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                  <Text
                    style={{
                      color: "gray",
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginRight: 10,
                    }}
                  >
                    forgot password?
                  </Text>
                </TouchableOpacity>
              </View>
              {!isLogging ? (
                <Button
                  rounded
                  full
                  style={{ marginTop: 10, borderRadius: 20 }}
                  onPress={handleSubmit}
                  color="#4F6DE5"
                >
                  <Text>SIGN IN</Text>
                </Button>
              ) : (
                <Spinner color="gray" />
              )}

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "gray" }}>Don't have an account?</Text>
                </View>
                <Button
                  transparent
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={{ fontSize: 16 }}>SIGN UP</Text>
                </Button>
              </View>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Login;
