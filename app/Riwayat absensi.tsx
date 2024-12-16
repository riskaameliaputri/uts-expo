import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function RiwayatScreen() {
  const route = useRoute();
  const { absensiData } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Absensi</Text>
      {absensiData ? (
        <View style={styles.item}>
          <Text>NPM: {absensiData.npm}</Text>
          <Text>Nama: {absensiData.name}</Text>
          <Text>Praktikum: {absensiData.praktikum}</Text>
          <Text>Dosen: {absensiData.dosen}</Text>
          <Text>Ruangan: {absensiData.ruangan}</Text>
          <Text>Tanggal: {absensiData.tanggal}</Text>
        </View>
      ) : (
        <Text>Data absensi tidak tersedia.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FDF5EC',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
});
