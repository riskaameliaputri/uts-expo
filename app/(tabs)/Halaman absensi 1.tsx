import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AbsensiScreen() {
  const [tanggal, setTanggal] = useState("");
  const [kehadiran, setKehadiran] = useState(null);

  const handleKirim = () => {
    if (!tanggal) {
      alert("Silakan isi tanggal terlebih dahulu!");
      return;
    }
    alert(`Tanggal: ${tanggal}\nKehadiran: ${kehadiran === "YA" ? "Masuk" : "Tidak Masuk"}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Absensi</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Input Tanggal */}
        <Text style={styles.label}>Tanggal</Text>
        <TextInput
          style={styles.input}
          placeholder="Pilih tanggal"
          value={tanggal}
          onChangeText={setTanggal}
        />

        {/* Pertanyaan Kehadiran */}
        <Text style={styles.label}>Apakah hari ini Anda masuk?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonOption, kehadiran === "YA" && styles.selectedOption]}
            onPress={() => setKehadiran("YA")}
          >
            <Text style={[styles.buttonText, kehadiran === "YA" && styles.selectedText]}>YA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOption, kehadiran === "TIDAK" && styles.selectedOption]}
            onPress={() => setKehadiran("TIDAK")}
          >
            <Text style={[styles.buttonText, kehadiran === "TIDAK" && styles.selectedText]}>TIDAK</Text>
          </TouchableOpacity>
        </View>

        {/* Instruksi jika tidak masuk */}
        {kehadiran === "TIDAK" && (
          <Text style={styles.infoText}>
            Jika tidak, harap kembali ke tombol **Absensi Keluar**
          </Text>
        )}

        {/* Tombol Kirim */}
        <TouchableOpacity style={styles.submitButton} onPress={handleKirim}>
          <Text style={styles.submitText}>Kirim</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person" size={24} color="#FFF" />
          <Text style={styles.footerText}>Profil</Text>
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
    backgroundColor: "#B9D8D6",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonOption: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  selectedOption: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#FFF",
  },
  infoText: {
    fontSize: 14,
    color: "#FF5722",
    textAlign: "center",
    marginBottom: 20,
  },
  submitButton: {
    height: 50,
    backgroundColor: "#B9D8D6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#B9D8D6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 5,
  },
});
