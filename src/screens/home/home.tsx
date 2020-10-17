import React, { useEffect, useRef } from "react";
import { Container, H1, Icon, Title } from "native-base";
import { View, StyleSheet } from "react-native";
import TabHeader from "../../ui/header";
import { getClinics } from "../../services/clinic";
import { TouchableOpacity } from "react-native-gesture-handler";

interface homeProps {}

const Home: React.FunctionComponent<homeProps> = (props) => {
  const componentLoadRef = useRef(false);

  const fetchClinics = async () => {
    try {
      const clinics: Clinic[] = await getClinics();
      console.log(clinics);
    } catch (e) {}
  };

  useEffect(() => {
    if (!componentLoadRef.current) {
      componentLoadRef.current = false;
      fetchClinics();
    }
  }, []);
  return (
    <Container>
      <TabHeader
        middle={<Title>Clinics</Title>}
        right={
          <TouchableOpacity onPress={fetchClinics}>
            <Icon type="EvilIcons" name="refresh" style={{ color: "white" }} />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <H1 style={{ paddingTop: 50 }}>CLINICS</H1>
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
