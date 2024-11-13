import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

const initialUsers = require('../../assessmentUsers.txt'); // Replace with parsed data

const UserCrudlerScreen = ({ navigation }) => {
  const [users, setUsers] = useState(initialUsers);

  const handleCreate = () => {
    // Navigate to a create screen or handle creation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Crudler</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { user: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add User" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
},
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    item: {
      fontSize: 18,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
  
  export default UserCrudlerScreen;