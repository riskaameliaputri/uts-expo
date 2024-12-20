import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function MahasiswaScreen() {
  // Data mahasiswa dalam bentuk array of objects
  const [mahasiswaData, setMahasiswaData] = useState([
    {
      namaLengkap: 'Riska Amelia',
      npm: '2021020100057',
      alamat: 'Jl. Kowel jaya',
      status: 'Aktif', // Status mahasiswa
    },
    {
      namaLengkap: 'Risky Aditya',
      npm: '2021020100058',
      alamat: 'Jl. Kowel jaya',
      status: 'Tidak Aktif', // Status mahasiswa
    },
    {
      namaLengkap: 'Agista Rizky',
      npm: '2021020100059',
      alamat: 'Jl. melati',
      status: 'Aktif', // Status mahasiswa
    },
    {
      namaLengkap: 'Ananda triana hafiyah',
      npm: '2021020100060',
      alamat: 'Jl. Kebangoran',
      status: 'Aktif', // Status mahasiswa
    },
    // Data mahasiswa lainnya...
  ]);

  // Render item mahasiswa
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Nama Lengkap: {item.namaLengkap}</Text>
      <Text style={styles.text}>NPM: {item.npm}</Text>
      <Text style={styles.text}>Alamat: {item.alamat}</Text>
      <Text style={styles.text}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Daftar Mahasiswa</Text>
      <FlatList
        data={mahasiswaData}
        renderItem={renderItem}
        keyExtractor={(item) => item.npm}
      />
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
    color: '#4E342E',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: '#4E342E',
  },
});
