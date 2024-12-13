import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function JadwalPraktikumScreen() {
  const [tanggal, setTanggal] = useState(new Date().toLocaleDateString());
  const [manualTanggal, setManualTanggal] = useState('');
  const [waktu, setWaktu] = useState('');
  const [praktikum, setPraktikum] = useState('');
  const [dosen, setDosen] = useState('');
  const [ruangan, setRuangan] = useState('');

  const handleSubmit = () => {
    const finalTanggal = manualTanggal || tanggal;

    if (finalTanggal && waktu && praktikum && dosen && ruangan) {
      Alert.alert(
        'Jadwal Disimpan',
        `Tanggal: ${finalTanggal}\nWaktu: ${waktu}\nPraktikum: ${praktikum}\nDosen: ${dosen}\nRuangan: ${ruangan}`
      );
      setManualTanggal('');
      setWaktu('');
      setPraktikum('');
      setDosen('');
      setRuangan('');
    } else {
      Alert.alert('Error', 'Harap isi semua data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Jadwal Praktikum</Text>

      <TextInput
        style={styles.input}
        placeholder="Tanggal Otomatis"
        value={tanggal}
        editable={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Tanggal Manual (Opsional)"
        value={manualTanggal}
        onChangeText={setManualTanggal}
      />

      <TextInput
        style={styles.input}
        placeholder="Waktu Praktikum (HH:MM)"
        value={waktu}
        onChangeText={setWaktu}
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
        placeholder="Ruangan/Lab"
        value={ruangan}
        onChangeText={setRuangan}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Simpan Jadwal</Text>
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
    marginBottom: 10,
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
