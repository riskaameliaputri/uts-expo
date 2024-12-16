import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome5 } from '@expo/vector-icons';

export default function KameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera | null>(null);

  // Meminta izin akses kamera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Jika izin kamera belum diberikan
  if (hasPermission === null) {
    return <View style={styles.loadingContainer}><Text style={styles.loadingText}>Memeriksa izin kamera...</Text></View>;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Izin Kamera Tidak Diberikan</Text>
        <Text style={styles.permissionTextSmall}>Silakan aktifkan izin kamera di pengaturan perangkat Anda.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Tampilan Kamera */}
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          {/* Tombol Ganti Kamera */}
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
              );
            }}
          >
            <FontAwesome5 name="sync" size={24} color="white" />
          </TouchableOpacity>

          {/* Tombol Ambil Foto */}
          <TouchableOpacity
            style={styles.captureButton}
            onPress={async () => {
              if (cameraRef.current) {
                try {
                  const photo = await cameraRef.current.takePictureAsync();
                  Alert.alert('Foto Tersimpan', `Foto URI: ${photo.uri}`);
                  console.log(photo.uri); // Menampilkan URI foto di console
                } catch (error) {
                  console.log('Error mengambil foto:', error);
                  Alert.alert('Error', 'Terjadi kesalahan saat mengambil foto.');
                }
              }
            }}
          >
            <FontAwesome5 name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  permissionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  permissionTextSmall: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  loadingText: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 15,
  },
  flipButton: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  captureButton: {
    backgroundColor: '#E63946',
    padding: 20,
    borderRadius: 50,
  },
});
