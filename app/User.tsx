import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  // Data User
  const user = {
    name: 'Riska Amelia',
    role: 'Mahasiswa',
    email: 'riskaameliaputri197@gmail.com',
    nim: '2021020100057',
    avatar: 'https://i.pravatar.cc/150?img=45', // Placeholder image
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2D6A4F" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profil Pengguna</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* User Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userRole}>{user.role}</Text>
      </View>

      {/* User Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={20} color="#6C757D" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="id-card" size={20} color="#6C757D" style={styles.infoIcon} />
          <Text style={styles.infoLabel}>NIM/NPM</Text>
          <Text style={styles.infoValue}>{user.nim}</Text>
        </View>
      </View>

      {/* Button Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="log-out" size={20} color="#FFF" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Keluar</Text>
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
    backgroundColor: '#2D6A4F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: StatusBar.currentHeight || 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#74C69D',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  userRole: {
    fontSize: 16,
    color: '#40916C',
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    color: '#6C757D',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9534F',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
