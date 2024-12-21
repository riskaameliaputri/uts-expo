import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatistikKehadiran = () => {
  // Data Statistik Kehadiran
  const statistik = {
    hadir: 40,
    tidakHadir: 8,
    izin: 2,
  };

  const total = statistik.hadir + statistik.tidakHadir + statistik.izin;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statistik Kehadiran</Text>

      {/* Bar Statistik */}
      <View style={styles.statistikContainer}>
        <Text style={styles.label}>Hadir</Text>
        <View style={styles.barWrapper}>
          <View
            style={[
              styles.bar,
              {
                width: `${(statistik.hadir / total) * 100}%`,
                backgroundColor: "#4CAF50",
              },
            ]}
          />
          <Text style={styles.value}>{statistik.hadir}</Text>
        </View>

        <Text style={styles.label}>Tidak Hadir</Text>
        <View style={styles.barWrapper}>
          <View
            style={[
              styles.bar,
              {
                width: `${(statistik.tidakHadir / total) * 100}%`,
                backgroundColor: "#F44336",
              },
            ]}
          />
          <Text style={styles.value}>{statistik.tidakHadir}</Text>
        </View>

        <Text style={styles.label}>Izin</Text>
        <View style={styles.barWrapper}>
          <View
            style={[
              styles.bar,
              {
                width: `${(statistik.izin / total) * 100}%`,
                backgroundColor: "#FFC107",
              },
            ]}
          />
          <Text style={styles.value}>{statistik.izin}</Text>
        </View>
      </View>

      {/* Ringkasan Total */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Kehadiran: {total}</Text>
        <Text style={styles.summaryText}>Hadir: {statistik.hadir}</Text>
        <Text style={styles.summaryText}>Tidak Hadir: {statistik.tidakHadir}</Text>
        <Text style={styles.summaryText}>Izin: {statistik.izin}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#007AFF",
  },
  statistikContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  barWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  bar: {
    height: 20,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  value: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#333",
  },
  summary: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
});

export default StatistikKehadiran;
