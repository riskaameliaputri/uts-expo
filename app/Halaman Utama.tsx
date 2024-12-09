import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png", // Ganti dengan logo Anda
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Absensi Praktikum</Text>
      </View>

      {/* Konten Utama */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Selamat datang di absensi praktikum</Text>

        {/* Tombol Absensi Masuk */}
        <TouchableOpacity style={styles.buttonMasuk}>
          <Ionicons name="log-in-outline" size={24} color="#4CAF50" style={styles.icon} />
          <Text style={styles.buttonText}>Absensi Masuk</Text>
        </TouchableOpacity>

        {/* Tombol Absensi Keluar */}
        <TouchableOpacity style={styles.buttonKeluar}>
          <Ionicons name="log-out-outline" size={24} color="#E57373" style={styles.icon} />
          <Text style={styles.buttonText}>Absensi Keluar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
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
    height: 220,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#4D8C82",
    marginBottom: 30,
  },
  buttonMasuk: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "80%",
    justifyContent: "center",
  },
  buttonKeluar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEBEE",
    borderColor: "#E57373",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "80%",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#4D4D4D",
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
