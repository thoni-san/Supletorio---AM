import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootDrawerParams } from '../navigator/DrawerPersonalizado';

export const Pantalla1Screen = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParams>>();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../img/logo2.png')} style={styles.logo} />
      <Text style={styles.title}>Supletorio</Text>
      <Text style={styles.subtitle}>Evaluacion Supletorio</Text>

      <View style={styles.navButtons}>
        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 1"
          style={styles.roundButton}
          onPress={() => navigation.navigate('Pantalla1Screen')}
        >
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 2"
          style={[styles.roundButton, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Pantalla2Screen')}
        >
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Ir a Pantalla 3"
          style={[styles.roundButton, styles.buttonAccent]}
          onPress={() => navigation.navigate('Pantalla3Screen')}
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

const BUTTON_SIZE = 76;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    marginBottom: 30,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 18,
    marginTop: 10,
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
  buttonSecondary: {
    backgroundColor: '#2e7d32',
  },
  buttonAccent: {
    backgroundColor: '#d84315',
  },
  number: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    width: BUTTON_SIZE,
  },
});
