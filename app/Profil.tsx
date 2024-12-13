import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Icon and Status */}
      <View style={styles.profileSection}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user-circle" size={100} color="#D9BBA9" />
        </View>
        <Text style={styles.statusText}>Online</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputSection}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC',
  },
  header: {
    backgroundColor: '#D9BBA9',
    padding: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#4E342E',
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
    borderColor: '#D9BBA9',
    borderWidth: 1,
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: '#D9BBA9',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  signOutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});