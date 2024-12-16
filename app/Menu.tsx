import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Selamat Pagi</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}> {/* Menggunakan Drawer Navigation */}
          <View style={styles.iconContainer}>
            <FontAwesome5 name="bars" size={24} color="#3E3E3E" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Menu Container */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: '#D4A373' }]}
          onPress={() => navigation.navigate('AbsensiMasuk')}
        >
          <Text style={styles.menuText}>Absensi Masuk</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: '#D4A373' }]}
          onPress={() => navigation.navigate('AbsensiKeluar')}
        >
          <Text style={styles.menuText}>Absensi Keluar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: '#8D6E63' }]}
          onPress={() => navigation.navigate('Dosen')}
        >
          <Text style={styles.menuText}>Dosen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuItem, { backgroundColor: '#6A994E' }]}
          onPress={() => navigation.navigate('RiwayatAbsensi')}
        >
          <Text style={styles.menuText}>Riwayat Absen</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6A994E',
    padding: 15,
    borderRadius: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 8,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  menuItem: {
    width: '45%',
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  footerText: {
    fontSize: 16,
    color: '#4E342E',
  },
});
