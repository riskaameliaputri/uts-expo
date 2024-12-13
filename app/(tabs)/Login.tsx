import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan gelombang */}
      <View style={styles.headerContainer}>
        <Svg
          height="150"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.wave}
        >
          <Path
            fill="#4caf50"
            d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,165.3C672,160,768,128,864,112C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </Svg>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Selamat Datang</Text>
          <Text style={styles.appName}>Absensi Praktikum</Text>
        </View>
      </View>

      {/* Ikon dan tombol */}
      <View style={styles.iconContainer}>
        <FontAwesome5 name="user-clock" size={80} color="#4caf50" />
      </View>

      <TouchableOpacity 
      onPress={() => {
        router.push('/(tabs)/Profil')
       }}
      style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.noAccountText}>Belum punya akun?</Text>

      <TouchableOpacity 
      onPress={() => {
        router.push('/(tabs)/Profil')
       }}
      style={styles.signupButton}>
        <Text style={styles.signupText}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    width: '100%',
    position: 'relative',
    backgroundColor: '#4caf50',
  },
  wave: {
    position: 'absolute',
    top: 0,
  },
  headerTextContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconContainer: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noAccountText: {
    fontSize: 14,
    color: '#7d7d7d',
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Page = () => {
  const router = useRouter();
  return (
    <Button
      title="Go to Home"
      onPress={() => router.push('/home')}
    />
  );
};