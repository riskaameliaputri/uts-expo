// Install expo-router before running this code
// Command: npm install expo-router

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.welcomeText}>Selamat datang</Text>
        <Text style={styles.title}>Absensi Praktikum</Text>
      </View>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/201/201576.png' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/Profil')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Don’t have an account?</Text>
      <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/Daftar akun')}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 80,
    left: 30,
    right: 30,
    backgroundColor: '#8AAE92',
    padding: 20,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#79B168',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '70%',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#C8956A',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    marginTop: 15,
    color: '#888',
  },
});

// Profile.js
export function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Profile Screen</Text>
    </View>
  );
}

// Signup.js
export function SignupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Screen</Text>
    </View>
  );
}
