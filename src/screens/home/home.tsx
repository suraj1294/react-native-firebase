import React from "react";
import { Container, H1, H3, Title } from "native-base";
import { View, StyleSheet } from "react-native";
import TabHeader from "../../ui/header";

interface homeProps {}

const Home: React.FunctionComponent<homeProps> = (props) => {
  return (
    <Container>
      <TabHeader middle={<Title>Home</Title>} />
      <View style={styles.container}>
        <H1 style={{ paddingTop: 50 }}>HELLO JONES </H1>
        <H3 style={{ color: "gray" }}>Lorem ipsum dolor</H3>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
