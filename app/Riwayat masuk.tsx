import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RiwayatAbsensiScreen() {
  const navigation = useNavigation();

  // Data absensi mahasiswa
  const absensiData = {
    npm: '2021020100057',
    name: 'Riska Amelia',
    praktikum: 'Pemrograman Mobile',
    dosen: 'Rofiuddin, S.Kom',
    ruangan: 'Lab 101',
    tanggal: new Date().toLocaleDateString(),
    status: 'Hadir', // Status absensi
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Absensi</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.item}>
          <Text style={styles.text}>NPM: {absensiData.npm}</Text>
          <Text style={styles.text}>Nama: {absensiData.name}</Text>
          <Text style={styles.text}>Praktikum: {absensiData.praktikum}</Text>
          <Text style={styles.text}>Dosen: {absensiData.dosen}</Text>
          <Text style={styles.text}>Ruangan: {absensiData.ruangan}</Text>
          <Text style={styles.text}>Tanggal: {absensiData.tanggal}</Text>
          <Text style={[styles.status, absensiData.status === 'Hadir' ? styles.hadir : styles.tidakHadir]}>
            Status: {absensiData.status}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>Kembali ke Home</Text>
        </TouchableOpacity>
      </View>
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
  scrollViewContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  hadir: {
    color: '#388E3C', // Hijau untuk status hadir
  },
  tidakHadir: {
    color: '#D32F2F', // Merah untuk status tidak hadir
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#4E342E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
