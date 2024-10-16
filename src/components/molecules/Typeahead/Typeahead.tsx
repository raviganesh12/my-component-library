import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../atoms/Input/Input';

interface TypeaheadProps {
  data: string[];
  placeholder: string;
  onSelect: (item: string) => void;
}

const Typeahead: React.FC<TypeaheadProps> = ({ data, placeholder, onSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleChangeText = (text: string) => {
    setQuery(text);
    if (text) {
      const filtered = data.filter(item => item.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelectItem = (item: string) => {
    setQuery(item);
    setFilteredData([]);
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <Input
        value={query}
        placeholder={placeholder}
        onChangeText={handleChangeText}
      />
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectItem(item)}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Typeahead;