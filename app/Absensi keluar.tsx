import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function AbsensiKeluarScreen() {
  const [npm, setNpm] = useState('');
  const [name, setName] = useState('');
  const [praktikum, setPraktikum] = useState('');
  const [dosen, setDosen] = useState('');
  const [alasan, setAlasan] = useState('');
  const [tanggal, setTanggal] = useState('');

  const handleSubmit = () => {
    if (npm && name && praktikum && dosen && tanggal) {
      Alert.alert(
        'Absensi Berhasil',
        `NPM: ${npm}\nNama: ${name}\nPraktikum: ${praktikum}\nDosen: ${dosen}\nTanggal: ${tanggal}\nAlasan: ${alasan}`
      );
      setNpm('');
      setName('');
      setPraktikum('');
      setDosen('');
      setAlasan('');
      setTanggal('');
    } else {
      Alert.alert('Error', 'Harap isi semua data wajib.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Absensi Tidak Hadir</Text>

      <TextInput
        style={styles.input}
        placeholder="NPM"
        value={npm}
        onChangeText={setNpm}
      />

      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nama Praktikum"
        value={praktikum}
        onChangeText={setPraktikum}
      />

      <TextInput
        style={styles.input}
        placeholder="Nama Dosen"
        value={dosen}
        onChangeText={setDosen}
      />

      <TextInput
        style={styles.input}
        placeholder="Tanggal (YYYY-MM-DD)"
        value={tanggal}
        onChangeText={setTanggal}
      />

      <TextInput
        style={styles.input}
        placeholder="Hari Ini Tidak Masuk (Alasan)"
        value={alasan}
        onChangeText={setAlasan}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kirim Absensi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5EC',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#D9BBA9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#4E342E',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
