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
      setErro("O código de acesso não pode estar vazio.");
    } else {
      // Faça a ação que você deseja realizar ao pressionar o botão "Acessar" aqui.
      // Por exemplo, navegar para outra tela, enviar o código para um servidor, etc.
      console.log("Acessou com código:", codigo);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 280, // Set the desired width for the image container
    height: 100, // Set the desired height for the image container
  },
  container: {
    backgroundColor: "dark",
  },
  logo: {
    width: "100%",
    height: "100%",
    marginBottom: 50,
  },
  text2: {
    fontSize: 25,
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
    fontSize: 15,
    marginTop: 10,
  },
});

export default CodigoDeAcessoInput;
