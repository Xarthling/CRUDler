import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

const initialModules = require('../assessmentModules.txt'); // Replace with parsed data

const ModuleCrudlerScreen = ({ navigation }) => {
  const [modules, setModules] = useState(initialModules);

  const handleCreate = () => {
    // Navigate to a create screen or handle creation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module Crudler</Text>
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ModuleDetail', { module: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Module" onPress={handleCreate} />
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

export default ModuleCrudlerScreen;