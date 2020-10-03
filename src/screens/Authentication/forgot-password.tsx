import React, { FC, useCallback } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikValues } from "formik";
import {
  Button,
  Input,
  Form,
  Item,
  Text,
  Container,
  Content,
  Icon,
  Spinner,
  H3,
} from "native-base";
import { SCREEN_HEIGHT } from "../../utils/constants";
import { resetPasswordWith } from "../../services/authentication";

interface ForgotPasswordForm {
  email: string;
}
interface ForgotPasswordFormProps {}

const ForgotPassword: FC<ForgotPasswordFormProps> = () => {
  const navigation = useNavigation();

  const initialValues: ForgotPasswordForm = { email: "" };

  const [emailSent, setEmailSent] = React.useState(false);
  const [sendingEmail, setSendingEmail] = React.useState(false);

  const handleSubmit = useCallback(
    async (values: FormikValues | ForgotPasswordForm) => {
      try {
        setSendingEmail(true);
        await resetPasswordWith({ email: values.email });
        setEmailSent(true);
        setSendingEmail(false);
      } catch (e) {
        console.log(e);
        setSendingEmail(false);
      }
    },
    []
  );

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
          FORGOT PASSWORD
        </Text>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form>
              <Item rounded style={{ marginTop: 10 }}>
                <Icon type="Entypo" name="email" style={{ color: "gray" }} />
                <Input
                  placeholder="Email"
                  placeholderTextColor="gray"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  label="Email"
                />
              </Item>
              {!sendingEmail && !emailSent && (
                <Button
                  rounded
                  full
                  style={{ marginTop: 20, borderRadius: 20 }}
                  onPress={handleSubmit}
                  color="#4F6DE5"
                >
                  <Text>SEND MAIL</Text>
                </Button>
              )}
              {sendingEmail && <Spinner />}
              {emailSent && (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: 20,
                  }}
                >
                  <Icon
                    type="FontAwesome"
                    name="check-circle-o"
                    style={{ color: "green" }}
                  />
                  <H3
                    style={{
                      color: "green",
                      paddingLeft: 5,
                      alignItems: "center",
                    }}
                  >
                    Verification mail sent!
                  </H3>
                </View>
              )}
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "gray" }}>Remember Password?</Text>
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

export default ForgotPassword;
