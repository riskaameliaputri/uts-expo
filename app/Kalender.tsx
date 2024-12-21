// kalender.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const Kalender = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  // Fungsi untuk menangani pemilihan tanggal
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalender Absensi Praktikum</Text>

      <Calendar
        // Properti untuk mengatur batas waktu kalender
        minDate={'2000-01-01'}
        maxDate={'2026-12-31'}

        // Menandai tanggal yang dipilih
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}

        // Event saat tanggal dipilih
        onDayPress={onDayPress}

        // Gaya kalender
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#f2f2f2',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          arrowColor: 'blue',
          monthTextColor: 'black',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
      />

      {/* Menampilkan tanggal yang dipilih */}
      {selectedDate ? (
        <Text style={styles.selectedDate}>Tanggal dipilih: {selectedDate}</Text>
      ) : null}

      {/* Tombol kembali */}
      <Button
        title="Kembali"
        onPress={() => navigation.navigate('Menu')}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
});

export default Kalender;
