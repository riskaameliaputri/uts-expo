import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top and Bottom Waves */}
      <View style={styles.topWave} />
      <View style={styles.bottomWave} />

      {/* Content Section */}
      <View style={styles.card}>
        {/* Illustration Icon */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
          }}
          style={styles.icon}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFE8E6", // Main background color
    alignItems: "center",
    justifyContent: "center",
  },
  topWave: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "#4E9B91",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: -1,
  },
  bottomWave: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "#4E9B91",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    zIndex: -1,
  },
  card: {
    backgroundColor: "#EAF8F7", // Card background color
    width: 280,
    height: 400,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  icon: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4E9B91", // Button color
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
});