import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DosenProfileScreen = () => {
  const navigation = useNavigation();

  const dosenData = [
    { id: '1', name: 'Dr. Riana Putri', subject: 'Matematika', status: 'Aktif', schedule: 'Senin & Rabu, 08:00 - 10:00' },
    { id: '2', name: 'Prof. Budi Santoso', subject: 'Fisika', status: 'Aktif', schedule: 'Selasa & Kamis, 10:00 - 12:00' },
    { id: '3', name: 'Dr. Siti Nurhaliza', subject: 'Kimia', status: 'Aktif', schedule: 'Rabu & Jumat, 13:00 - 15:00' },
    { id: '4', name: 'Dr. Ahmad Fauzi', subject: 'Biologi', status: 'Aktif', schedule: 'Senin & Kamis, 09:00 - 11:00' },
    { id: '5', name: 'Dr. Intan Maharani', subject: 'Ekonomi', status: 'Aktif', schedule: 'Jumat, 14:00 - 16:00' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2D6A4F" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil Dosen</Text>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Cari nama dosen..." style={styles.searchInput} placeholderTextColor="#A0A0A0" />
      </View>
      
      {/* Dosen List */}
      <FlatList
        data={dosenData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <FontAwesome name="user-circle" size={40} color="#4CAF50" style={styles.icon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>Mata Kuliah: {item.subject}</Text>
              <Text style={styles.cardSubtitle}>Status: {item.status}</Text>
              <Text style={styles.cardSubtitle}>Jadwal: {item.schedule}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
      
      {/* Footer */}
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.footerButtonText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#2D6A4F',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchInput: {
    fontSize: 16,
    height: 50,
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  footerButton: {
    backgroundColor: '#2D6A4F',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default DosenProfileScreen;
