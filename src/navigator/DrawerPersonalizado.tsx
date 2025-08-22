import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import Pantalla3Screen from '../screens/Pantalla3Screen'; 
import { colores } from '../theme/appTheme';

export type RootDrawerParams = {
  Pantalla1Screen: undefined;
  Pantalla2Screen: undefined;
  Pantalla3Screen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerPersonalizado = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuContenido {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colores.menuFondo,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: colores.menuTexto,
      }}
    >
      <Drawer.Screen 
        name="Pantalla1Screen" 
        component={Pantalla1Screen} 
        options={{ title: 'Inicio' }} 
      />
      <Drawer.Screen 
        name="Pantalla2Screen" 
        component={Pantalla2Screen} 
        options={{ title: 'Componentes' }} 
      />
      <Drawer.Screen 
        name="Pantalla3Screen" 
        component={Pantalla3Screen} 
        options={{ title: 'Acumulador' }}
      />
    </Drawer.Navigator>
  );
};

const MenuContenido = (props: DrawerContentComponentProps) => {
  const { navigation, state } = props;
  const activeRouteName = state.routes[state.index].name;

  const menuItems = [
    { name: 'Pantalla1Screen', label: 'Inicio' },
    { name: 'Pantalla2Screen', label: 'Componentes' },
    { name: 'Pantalla3Screen', label: 'Acumulador' },
  ];

  return (
    <DrawerContentScrollView style={{ backgroundColor: colores.blanco }}>
      <View style={styles.menuHeader}>
        <Image
          source={require('../img/logo.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.headerSubtitle}>Supletorio</Text>
      </View>

      <View style={styles.menuItemsContainer}>
        {menuItems.map((item) => {
          const isActive = activeRouteName === item.name;
          return (
            <TouchableOpacity
              key={item.name}
              style={[ styles.menuButton, isActive && styles.menuButtonActive ]}
              onPress={() => navigation.navigate(item.name as never)}
            >
              <Text style={[ styles.menuButtonText, isActive && styles.menuButtonTextActive ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menuHeader: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: colores.menuFondo,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: colores.blanco,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.menuTexto,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#1565c0',
  },
  menuItemsContainer: {
    padding: 15,
  },
  menuButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  menuButtonActive: {
    backgroundColor: colores.menuFondo,
  },
  menuButtonText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
  menuButtonTextActive: {
    color: colores.menuTexto,
    fontWeight: 'bold',
  },
});
