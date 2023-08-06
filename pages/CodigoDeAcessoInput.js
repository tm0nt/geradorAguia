import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CodigoDeAcessoInput = () => {
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState(null);

  const handleCodigoChange = (text) => {
    setCodigo(text);
    setErro(null);
  };

  const handleAcessar = () => {
    if (codigo.trim() === "") {
      setErro("O campo de código de acesso não pode estar vazio.");
    } else {
      // Faça a ação que você deseja realizar ao pressionar o botão "Acessar" aqui.
      // Por exemplo, navegar para outra tela, enviar o código para um servidor, etc.
      console.log("Acessou com código:", codigo);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text2}>Insira o código de acesso</Text>
      <TextInput
        style={styles.input}
        placeholder="Código de Acesso"
        value={codigo}
        selectionColor="purple"
        onChangeText={handleCodigoChange}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleAcessar}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      {erro && <Text style={styles.errorText}>{erro}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dark",
  },
  logo: {
    position: "relative",
    marginBottom: 20,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    color: "white",
    fontSize: 16,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});

export default CodigoDeAcessoInput;
