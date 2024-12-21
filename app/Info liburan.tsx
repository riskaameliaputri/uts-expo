import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Card, Text, Avatar, Divider, Button } from "react-native-paper";

// Banyak data liburan (dummy)
const holidays = [
  { id: "1", title: "Tahun Baru", date: "1 Januari 2024", description: "Libur nasional untuk merayakan tahun baru.", icon: "calendar-star" },
  { id: "2", title: "Hari Kemerdekaan", date: "17 Agustus 2024", description: "Memperingati hari kemerdekaan Indonesia.", icon: "flag" },
  { id: "3", title: "Natal", date: "25 Desember 2024", description: "Hari libur untuk merayakan Natal.", icon: "gift" },
  { id: "4", title: "Idul Fitri", date: "10-11 April 2024", description: "Hari raya umat Islam setelah berpuasa selama Ramadhan.", icon: "moon-waning-crescent" },
  { id: "5", title: "Nyepi", date: "11 Maret 2024", description: "Hari raya umat Hindu untuk menyambut tahun baru Saka.", icon: "brightness-4" },
  { id: "6", title: "Waisak", date: "23 Mei 2024", description: "Hari besar umat Buddha memperingati kelahiran Buddha.", icon: "meditation" },
  { id: "7", title: "Imlek", date: "10 Februari 2024", description: "Tahun baru Cina dirayakan oleh masyarakat Tionghoa.", icon: "lantern" },
  { id: "8", title: "Maulid Nabi", date: "15 Februari 2024", description: "Memperingati kelahiran Nabi Muhammad SAW.", icon: "account-star" },
  { id: "9", title: "Hari Buruh", date: "1 Mei 2024", description: "Hari internasional untuk memperingati hak-hak pekerja.", icon: "worker" },
  { id: "10", title: "Hari Pancasila", date: "1 Juni 2024", description: "Memperingati lahirnya Pancasila sebagai dasar negara.", icon: "book-open" },
  { id: "11", title: "Hari Kartini", date: "21 April 2024", description: "Memperingati perjuangan emansipasi wanita Indonesia.", icon: "human-female" },
  { id: "12", title: "Hari Pendidikan", date: "2 Mei 2024", description: "Hari untuk memperingati peran pendidikan di Indonesia.", icon: "school" },
];

const InfoLiburan = ({ navigation }) => {
  const renderHoliday = ({ item }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Title
        title={item.title}
        subtitle={item.date}
        left={(props) => (
          <Avatar.Icon
            {...props}
            icon={item.icon}
            style={{ backgroundColor: "#4caf50" }}
          />
        )}
      />
      <Card.Content>
        <Text style={styles.description}>{item.description}</Text>
      </Card.Content>
      <Divider style={{ marginVertical: 10 }} />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={holidays}
        renderItem={renderHoliday}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        Kembali
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    marginVertical: 20,
    backgroundColor: "#4caf50",
  },
});

export default InfoLiburan;
