import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function RiwayatAbsensiScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // Data default dengan status Hadir dan Tidak Hadir
  const defaultData = [
    {
      npm: '2021020100057',
      name: 'Riska Amelia',
      praktikum: 'Pemrograman Mobile',
      dosen: 'Rofiuddin, S.Kom',
      ruangan: 'Lab 101',
      tanggal: new Date().toLocaleDateString(),
      status: 'Hadir', // Status hadir
    },
    {
      npm: '2021020100058',
      name: 'Risky aditya',
      praktikum: 'Pemrograman Mobile',
      dosen: 'Rofiuddin, S.Kom',
      ruangan: 'Lab 102',
      tanggal: new Date().toLocaleDateString(),
      status: 'Tidak Hadir', // Status tidak hadir
      alasan: 'izin'
    },
    {
      npm: '2021020100059',
      name: 'Muhammad rayhan',
      praktikum: 'Sistem Basis Data',
      dosen: 'Ahmad Nur, S.T.',
      ruangan: 'Lab 103',
      tanggal: new Date().toLocaleDateString(),
      status: 'Hadir', // Status hadir
    },
  ];

  // Gunakan data dari route jika ada, jika tidak gunakan defaultData
  const absensiData = route.params?.absensiData || defaultData;

  // Pisahkan data berdasarkan status Hadir dan Tidak Hadir
  const hadirData = absensiData.filter(item => item.status === 'Hadir');
  const tidakHadirData = absensiData.filter(item => item.status === 'Tidak Hadir');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Absensi</Text>
      
      <Text style={styles.sectionHeader}>Hadir:</Text>
      <ScrollView style={styles.scrollView}>
        {hadirData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>NPM: {item.npm}</Text>
            <Text>Nama: {item.name}</Text>
            <Text>Praktikum: {item.praktikum}</Text>
            <Text>Dosen: {item.dosen}</Text>
            <Text>Ruangan: {item.ruangan}</Text>
            <Text>Tanggal: {item.tanggal}</Text>
            <Text style={styles.status}>Status: Hadir</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionHeader}>Tidak Hadir:</Text>
      <ScrollView style={styles.scrollView}>
        {tidakHadirData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>NPM: {item.npm}</Text>
            <Text>Nama: {item.name}</Text>
            <Text>Praktikum: {item.praktikum}</Text>
            <Text>Dosen: {item.dosen}</Text>
            <Text>Ruangan: {item.ruangan}</Text>
            <Text>Tanggal: {item.tanggal}</Text>
            <Text style={styles.status}>Status: Tidak Hadir</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>Kembali</Text>
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
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4E342E',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F', // Merah untuk menandakan status Tidak Hadir
  },
  scrollView: {
    marginBottom: 20,
  },
  footer: {
    marginTop: 'auto', // Tombol berada di bagian bawah layar
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#4E342E',
    paddingVertical: 20, // Lebih tinggi
    width: '90%', // Lebih panjang
    borderRadius: 15, // Lebih membulat
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 20, // Ukuran teks lebih besar
    fontWeight: 'bold',
  },
});
