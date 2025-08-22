import { StyleSheet } from "react-native";

export const colores = {
    primario: '#ff6f61',     
    secundario: '#17a2b8',   
    fondo: '#fcfcf8',        
    texto: '#343a40',         
    blanco: '#ffffff',
    borde: '#e9ecef',
    exito: '#28a745',
    menuFondo: '#e3f2fd',    
    menuTexto: '#0d47a1',     
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.fondo,
        paddingHorizontal: 20,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: colores.fondo,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colores.texto,
    },

    subtitle: {
        fontSize: 18,
        color: '#6c757d',
        marginBottom: 40,
        textAlign: 'center',
    },
    resultadoTexto: {
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold',
        color: colores.exito,
    },
    errorTexto: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: colores.primario,
    },
    image: {
        width: 220,
        height: 220,
        resizeMode: 'contain',
        marginBottom: 50,
    },
});