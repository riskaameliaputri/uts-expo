import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function MahasiswaScreen() {
  const navigation = useNavigation();

  // Data mahasiswa dummy dengan generator
  const [mahasiswaData, setMahasiswaData] = useState(
    Array.from({ length: 50 }, (_, index) => ({
      namaLengkap: `Mahasiswa ${index + 1}`,
      npm: `2021020100${index + 57}`,
      alamat: `Jl. Melati ${index + 1}`,
      status: index % 1 === 0 ? "Aktif" : "Tidak Aktif", // Alternatif status
    }))
  );

  // Render item mahasiswa
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.namaLengkap}</Text>
      <Text style={styles.text}>NPM: {item.npm}</Text>
      <Text style={styles.text}>Alamat: {item.alamat}</Text>
      <Text
        style={[styles.text, { fontWeight: "bold", color: item.status === "Aktif" ? "#388E3C" : "#D32F2F" }]}
      >
        Status: {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Daftar Mahasiswa</Text>

      {/* Daftar Mahasiswa */}
      <FlatList
        data={mahasiswaData}
        renderItem={renderItem}
        keyExtractor={(item) => item.npm}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  backButton: {
    backgroundColor: "#6D4C41",
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4E342E",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4E342E",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#6D4C41",
  },
});
