import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}> 
          <FontAwesome name="bars" size={30} color="#4E342E" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.greeting}>Selamat Pagi</Text>
        <FontAwesome name="user-circle" size={40} color="#4E342E" />
      </View>

      {/* Feature Buttons */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureButton} onPress={() => navigation.navigate('Absensi masuk')}>
          <FontAwesome name="sign-in" size={50} color="#4E342E" />
          <Text style={styles.featureText}>Absensi Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton} onPress={() => navigation.navigate('Absensi keluar')}>
          <FontAwesome name="sign-in" size={50} color="#4E342E" style={{ transform: [{ rotate: '180deg' }] }} />
          <Text style={styles.featureText}>Absensi Keluar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton} onPress={() => navigation.navigate('Dosen')}> 
          <FontAwesome name="users" size={50} color="#4E342E" />
          <Text style={styles.featureText}>Dosen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureButton} onPress={() => navigation.navigate('Riwayat absensi')}>
          <FontAwesome name="history" size={50} color="#4E342E" />
          <Text style={styles.featureText}>Riwayat Absen</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={30} color="#4E342E" /> {/* Ikon rumah */}
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('User')}> 
          <FontAwesome name="user" size={30} color="#4E342E" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D9BBA9',
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  menuIcon: {
    marginRight: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  featuresContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  featureButton: {
    width: '40%',
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  featureText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#D9BBA9',
  },
});
