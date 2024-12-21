import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function RiwayatAbsensiScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // Data absensi (contoh data diperbanyak)
  const defaultData = Array.from({ length: 20 }, (_, i) => ({
    npm: `20210201000${i + 1}`,
    name: `Nama Mahasiswa ${i + 1}`,
    praktikum: i % 2 === 0 ? 'Pemrograman Mobile' : 'Sistem Basis Data',
    dosen: i % 2 === 0 ? 'Rofiuddin, S.Kom' : 'Ahmad Nur, S.T.',
    ruangan: `Lab 10${i % 3 + 1}`,
    tanggal: new Date().toLocaleDateString(),
    status: i % 3 === 0 ? 'Tidak Hadir' : 'Hadir',
    alasan: i % 3 === 0 ? 'Izin' : '',
  }));

  // Gunakan data dari route jika ada, jika tidak gunakan defaultData
  const absensiData = route.params?.absensiData || defaultData;

  // Pisahkan data berdasarkan status Hadir dan Tidak Hadir
  const hadirData = absensiData.filter(item => item.status === 'Hadir');
  const tidakHadirData = absensiData.filter(item => item.status === 'Tidak Hadir');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Absensi</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeader}>Hadir:</Text>
        {hadirData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubTitle}>NPM: {item.npm}</Text>
            <Text style={styles.itemSubTitle}>Praktikum: {item.praktikum}</Text>
            <Text style={styles.itemSubTitle}>Dosen: {item.dosen}</Text>
            <Text style={styles.itemSubTitle}>Ruangan: {item.ruangan}</Text>
            <Text style={styles.itemSubTitle}>Tanggal: {item.tanggal}</Text>
            <Text style={[styles.status, styles.statusHadir]}>Status: {item.status}</Text>
          </View>
        ))}

        <Text style={styles.sectionHeader}>Tidak Hadir:</Text>
        {tidakHadirData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubTitle}>NPM: {item.npm}</Text>
            <Text style={styles.itemSubTitle}>Praktikum: {item.praktikum}</Text>
            <Text style={styles.itemSubTitle}>Dosen: {item.dosen}</Text>
            <Text style={styles.itemSubTitle}>Ruangan: {item.ruangan}</Text>
            <Text style={styles.itemSubTitle}>Tanggal: {item.tanggal}</Text>
            <Text style={[styles.status, styles.statusTidakHadir]}>Status: {item.status}</Text>
            {item.alasan && <Text style={styles.itemSubTitle}>Alasan: {item.alasan}</Text>}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#374151',
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
  },
  itemSubTitle: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 2,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusHadir: {
    color: '#22C55E', // Hijau untuk status Hadir
  },
  statusTidakHadir: {
    color: '#EF4444', // Merah untuk status Tidak Hadir
  },
  backButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
