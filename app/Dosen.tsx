import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DosenProfileScreen = () => {
  const navigation = useNavigation();

  // Contoh data guru (dosen)
  const dosenData = [
    { id: '1', name: 'Dr. Riana Putri', subject: 'Matematika', status: 'Aktif', schedule: 'Senin & Rabu, 08:00 - 10:00' },
    { id: '2', name: 'Prof. Budi Santoso', subject: 'Fisika', status: ' Aktif', schedule: 'Selasa & Kamis, 10:00 - 12:00' },
    { id: '3', name: 'Dr. Siti Nurhaliza', subject: 'Kimia', status: 'Aktif', schedule: 'Rabu & Jumat, 13:00 - 15:00' },
    { id: '4', name: 'Dr. Ahmad Fauzi', subject: 'Biologi', status: 'Aktif', schedule: 'Senin & Kamis, 09:00 - 11:00' },
    { id: '5', name: 'Dr. Intan Maharani', subject: 'Ekonomi', status: 'Aktif', schedule: 'Jumat, 14:00 - 16:00' },
    { id: '6', name: 'Prof. Agus Pratama', subject: 'Sosiologi', status: 'Aktif', schedule: 'Selasa, 08:00 - 10:00' },
    { id: '7', name: 'Dr. Dewi Kartika', subject: 'Geografi', status: 'Aktif', schedule: 'Kamis, 10:00 - 12:00' },
    { id: '8', name: 'Dr. Bambang Sutrisno', subject: 'Sejarah', status: ' Aktif', schedule: 'Rabu, 09:00 - 11:00' },
    { id: '9', name: 'Prof. Ratna Dewi', subject: 'Bahasa Indonesia', status: 'Aktif', schedule: 'Senin & Jumat, 08:00 - 10:00' },
    { id: '10', name: 'Dr. Joko Widodo', subject: 'Bahasa Inggris', status: 'Aktif', schedule: 'Selasa & Kamis, 13:00 - 15:00' },
    { id: '11', name: 'Prof. Sri Lestari', subject: 'Fisika', status: 'Aktif', schedule: 'Rabu, 10:00 - 12:00' },
    { id: '12', name: 'Dr. Hasan Basri', subject: 'Matematika', status: ' Aktif', schedule: 'Kamis, 09:00 - 11:00' },
    { id: '13', name: 'Dr. Maya Sari', subject: 'Kimia', status: 'Aktif', schedule: 'Jumat, 13:00 - 15:00' },
    { id: '14', name: 'Prof. Wahyu Putra', subject: 'Teknologi Informasi', status: 'Aktif', schedule: 'Senin & Kamis, 14:00 - 16:00' },
    { id: '15', name: 'Dr. Dedi Kusnadi', subject: 'Pendidikan', status: ' Aktif', schedule: 'Selasa, 09:00 - 11:00' }
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dosen</Text>
      </View>

      {/* Profile Icon */}
      <View style={styles.profileSection}>
        <View style={styles.iconContainer}>
          <FontAwesome name="users" size={100} color="#B8D8BA" />
        </View>
        <Text style={styles.statusText}>Data Guru</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputSection}>
        <TextInput placeholder="Cari nama dosen" style={styles.input} />
      </View>

      {/* List of Dosen */}
      <FlatList
        data={dosenData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Mata Pelajaran: {item.subject}</Text>
            <Text style={styles.detail}>Status: {item.status}</Text>
            <Text style={styles.detail}>Jadwal: {item.schedule}</Text>
          </View>
        )}
      />

      {/* Sign Out Button */}
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => navigation.navigate('Home')} // Navigasi ke Home
      >
        <Text style={styles.signOutText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#B8D8BA',
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D6A4F',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    marginBottom: 10,
  },
  statusText: {
    fontSize: 18,
    color: '#2D6A4F',
  },
  inputSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#B8D8BA',
    borderWidth: 1,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    borderColor: '#E9ECEF',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D6A4F',
  },
  detail: {
    fontSize: 16,
    color: '#495057',
  },
  signOutButton: {
    backgroundColor: '#B8D8BA',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  signOutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DosenProfileScreen;
