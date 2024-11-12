import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />
      
      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://img.icons8.com/ios-filled/100/clock.png' }}
          style={styles.icon}
        />
        
        <Text style={styles.welcomeText}>Selamat datang</Text>
        <Text style={styles.subText}>Absensi praktikum</Text>
      </View>
      
      <View style={styles.bottomBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3C9C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    height: '40%',
    width: '100%',
    backgroundColor: '#3DA18D',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  bottomBackground: {
    position: 'absolute',
    bottom: 0,
    height: '20%',
    width: '100%',
    backgroundColor: '#3DA18D',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
});