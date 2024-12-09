import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Header dengan Logo */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png", // Ganti dengan logo Anda
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Absensi Praktikum</Text>
      </View>

      {/* Form Login */}
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan email atau nomor hp"
          placeholderTextColor="#A0A0A0"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={true}
        />

        {/* Lupa Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Lupa password ?</Text>
        </TouchableOpacity>

        {/* Tombol Login */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Belum punya akun? <Text style={styles.registerLink}>Daftar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Latar belakang utama
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4D8C82",
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#4D8C82",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#4D8C82",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#E8E8E8",
    marginBottom: 15,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#4D8C82",
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#B9D8D6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 14,
    color: "#A0A0A0",
  },
  registerLink: {
    color: "#4D8C82",
    fontWeight: "bold",
  },
});
