import { Container, Title } from "native-base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TabHeader from "../../ui/header";

interface settingsProps {}

const Settings: React.FunctionComponent<settingsProps> = (props) => {
  return (
    <Container>
      <TabHeader middle={<Title>Settings</Title>} />
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
