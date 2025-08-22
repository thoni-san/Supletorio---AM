import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParams } from '../navigator/DrawerPersonalizado';

const products = [
  { id: '1', name: 'mouse', price: 50 },
  { id: '2', name: 'laptop', price: 1500 },
  { id: '3', name: 'teclado', price: 80 },
  { id: '4', name: 'monitor', price: 120 },
];

export const Pantalla2Screen = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParams>>();

  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  
  const total = products
    .filter((item) => selected.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selecciona tus Productos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => {
          const isSelected = selected.includes(item.id);
          return (
            <TouchableOpacity
              style={[styles.item, isSelected && styles.itemSelected]}
              onPress={() => toggleSelect(item.id)}
              activeOpacity={0.8}
            >
              <View style={styles.itemLeft}>
                <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                  {isSelected && <Text style={styles.checkText}>✓</Text>}
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>

              <Text style={styles.price}>${item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total a pagar: ${total}</Text>
        <Text style={styles.countText}>{selected.length} productos seleccionados</Text>
      </View>

      <View style={styles.navButtons}>
        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 1"
          style={styles.roundButton}
          onPress={() => navigation.navigate('Pantalla1Screen')}
          activeOpacity={0.8}
        >
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 2"
          style={[styles.roundButton, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Pantalla2Screen')}
          activeOpacity={0.8}
        >
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 3"
          style={[styles.roundButton, styles.buttonAccent]}
          onPress={() => navigation.navigate('Pantalla3Screen')}
          activeOpacity={0.8}
        >
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.labelsRow}>
        <Text style={styles.label}>Pantalla 1</Text>
        <Text style={styles.label}>Pantalla 2</Text>
        <Text style={styles.label}>Pantalla 3</Text>
      </View>
    </SafeAreaView>
  );
};

const BUTTON_SIZE = 68;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#1565c0' },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },
  itemSelected: {
    backgroundColor: '#e3f2fd',
    borderColor: '#90caf9',
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1565c0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#1565c0',
  },
  checkText: { color: '#fff', fontWeight: '700' },
  itemText: { fontSize: 18 },
  price: { fontSize: 18, fontWeight: '700', color: '#1565c0' },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#1565c0',
    alignItems: 'center',
  },
  totalText: { fontSize: 18, fontWeight: '700', color: '#fff' },
  countText: { fontSize: 13, color: '#e0f2ff', marginTop: 4 },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 18,
    marginTop: 18,
  },
  roundButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1565c0',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSecondary: { backgroundColor: '#2e7d32' },
  buttonAccent: { backgroundColor: '#d84315' },
  number: { fontSize: 24, fontWeight: '800', color: '#fff' },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  label: { fontSize: 13, color: '#666', textAlign: 'center', width: BUTTON_SIZE },
});
