import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.title}>Absensi Praktikum</Text>
      </View>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/201/201576.png' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/Profil')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Belum punya akun?</Text>
      <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/DaftarAkun')}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Profile.js
export function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Welcome to Profile Screen</Text>
    </View>
  );
}

// Signup.js
export function SignupScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Sign Up Screen</Text>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#79B168',
    marginTop: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 30,
  },
  loginButton: {
    backgroundColor: '#79B168',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  signupButton: {
    backgroundColor: '#C8956A',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    marginTop: 20,
    color: '#888',
    fontSize: 14,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F1EB',
  },
  screenText: {
    fontSize: 18,
    color: '#555',
  },
});
