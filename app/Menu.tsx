import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    { id: '1', title: 'Data Mahasiswa', screen: 'DataMahasiswaScreen' },
    { id: '2', title: 'Kalender', screen: 'KalenderScreen' },
    { id: '3', title: 'Pengumuman Liburan', screen: 'PengumumanLiburanScreen' },
    { id: '4', title: 'Kamera', screen: 'KameraScreen' },
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={() => navigation.navigate(item.screen)} // Pastikan navigation tersedia
    >
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList 
        data={menuItems} 
        renderItem={renderMenuItem} 
        keyExtractor={item => item.id} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MenuScreen;