import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParams } from '../navigator/DrawerPersonalizado';

const Pantalla3Screen = () => {
  const [contador, setContador] = useState(0);
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParams>>();

  const aumentar = () => setContador((c) => c + 5);
  const disminuir = () => setContador((c) => c - 5);
  const reset = () => setContador(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Acumulador</Text>
      <Text style={styles.contador}>{contador}</Text>

      <View style={styles.botonesRow}>
        <TouchableOpacity style={[styles.actionButton, styles.negative]} onPress={disminuir} activeOpacity={0.8} accessibilityLabel="Disminuir 5">
          <Text style={styles.actionText}>-5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.positive]} onPress={aumentar} activeOpacity={0.8} accessibilityLabel="Aumentar 5">
          <Text style={styles.actionText}>+5</Text>
        </TouchableOpacity>
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 18, color: '#1565c0' },
  contador: { fontSize: 64, fontWeight: '900', marginBottom: 24, color: '#17a2b8' },
  botonesRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 14, marginBottom: 28 },
  actionButton: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    minWidth: 96,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#e0e0e0',
  },
  negative: { backgroundColor: '#ef9a9a' },
  positive: { backgroundColor: '#a5d6a7' },
  resetButton: { backgroundColor: '#fff6c8', borderWidth: 1, borderColor: '#ffb74d' },
  actionText: { fontSize: 18, fontWeight: '700', color: '#222' },
  navButtons: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 18 },
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
  labelsRow: { flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginTop: 10 },
  label: { fontSize: 13, color: '#666', textAlign: 'center', width: BUTTON_SIZE },
});

export default Pantalla3Screen;
