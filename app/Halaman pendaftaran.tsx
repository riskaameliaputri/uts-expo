import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Gunakan ikon dari Expo

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* Header dengan Gelombang */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png", // Ganti dengan logo Anda
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Absensi Praktikum</Text>
      </View>

      {/* Form Pendaftaran */}
      <View style={styles.form}>
        <Text style={styles.instructionText}>
          Silahkan daftar menggunakan email anda
        </Text>

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

        <Text style={styles.label}>Konfirmasi password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password kembali"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={true}
        />

        {/* Tombol Daftar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer dengan Navigasi */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#4D8C82" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="#4D8C82" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#4D8C82",
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  form: {
    padding: 20,
  },
  instructionText: {
    textAlign: "center",
    color: "#4D8C82",
    fontSize: 14,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
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
  button: {
    backgroundColor: "#4D8C82",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
    backgroundColor: "#B9D8D6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    elevation: 5,
  },
});
