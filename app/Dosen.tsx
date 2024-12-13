import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AbsensiDosenScreen() {
  const [nip, setNip] = useState('');
  const [name, setName] = useState('');
  const [matkul, setMatkul] = useState('');
  const [kelas, setKelas] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || tanggal;
    setShowPicker(false);
    setTanggal(currentDate);
  };

  const handleSubmit = () => {
    if (nip && name && matkul && kelas && tanggal) {
      Alert.alert(
        'Absensi Berhasil',
        `NIP: ${nip}\nNama: ${name}\nMata Kuliah: ${matkul}\nKelas: ${kelas}\nTanggal: ${tanggal.toLocaleDateString()}`
      );
      setNip('');
      setName('');
      setMatkul('');
      setKelas('');
      setTanggal(new Date());
    } else {
      Alert.alert('Error', 'Harap isi semua data wajib.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Absensi Dosen</Text>

      <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
        <Text style={{ color: '#000' }}>{tanggal.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={tanggal}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="NIP"
        value={nip}
        onChangeText={setNip}
      />

      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Mata Kuliah"
        value={matkul}
        onChangeText={setMatkul}
      />

      <TextInput
        style={styles.input}
        placeholder="Kelas"
        value={kelas}
        onChangeText={setKelas}
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
    justifyContent: 'center',
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
