import React, {useState} from "react";
import { View, FlatList,Text,TouchableOpacity , StyleSheet} from "react-native";

export default function FlatList1 (){
    const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: '1', name: 'Comer' },
    { id: '2', name: 'Bailar' },
    { id: '3', name: 'Dormir' },
    { id: '4', name: 'Besar' },
    { id: '5', name: 'Nadar' },
    { id: '6', name: 'Pescar' },
  ];

  const handleSelect = (id) => {
    setSelectedItem(id);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedItem;

    return (
      <TouchableOpacity onPress={() => handleSelect(item.id)} style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={[styles.itemText, isSelected && styles.selectedText]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      extraData={selectedItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: '#cce5ff',  
  },
  itemText: {
    fontSize: 18,
  },
  selectedText: {
    fontWeight: 'bold',  
  },
});