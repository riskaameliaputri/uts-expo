import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function AbsensiMasukScreen() {
  const [npm, setNpm] = useState('');
  const [name, setName] = useState('');
  const [praktikum, setPraktikum] = useState('');
  const [dosen, setDosen] = useState('');
  const [ruangan, setRuangan] = useState('');
  const [tanggal, setTanggal] = useState(new Date().toLocaleDateString());
  const [manualTanggal, setManualTanggal] = useState('');

  const handleSubmit = () => {
    const finalTanggal = manualTanggal || tanggal;

    if (npm && name && praktikum && dosen && ruangan && finalTanggal) {
      Alert.alert(
        'Absensi Berhasil',
        `NPM: ${npm}\nNama: ${name}\nPraktikum: ${praktikum}\nDosen: ${dosen}\nRuangan/Lab: ${ruangan}\nHari: ${finalTanggal}`
      );
      setNpm('');
      setName('');
      setPraktikum('');
      setDosen('');
      setRuangan('');
      setTanggal(new Date().toLocaleDateString());
      setManualTanggal('');
    } else {
      Alert.alert('Error', 'Harap isi semua data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Absensi Masuk</Text>


      <TextInput
        style={styles.input}
        placeholder="Tanggal Manual (Opsional)"
        value={manualTanggal}
        onChangeText={setManualTanggal}
      />

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
        placeholder="Ruangan/Lab"
        value={ruangan}
        onChangeText={setRuangan}
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
