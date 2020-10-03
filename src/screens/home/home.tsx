import { Container, Title } from "native-base";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TabHeader from "../../ui/header";

interface homeProps {}

const Home: React.FunctionComponent<homeProps> = (props) => {
  return (
    <Container>
      <TabHeader middle={<Title>Home</Title>} />
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
