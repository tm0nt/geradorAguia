import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CodigoDeAcessoInput from "./pages/CodigoDeAcessoInput";

const App = () => {
  return (
    <View style={styles.container}>
      <CodigoDeAcessoInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default App;
