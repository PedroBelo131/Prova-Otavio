import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: 180,
        backgroundColor: 'gray',
        borderRadius: 15
    },
    viewImagem:{
        
        width: '150px',
        height: '100%',
        padding: 10,
        //backgroundColor: 'blue'
    },
    viewDados: {
        width: '70%',
        padding: 10
    },
    poster: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sinopse: {
        marginBottom: 10
    },
    btnComprar: {
        borderRadius: 15,
        bottom: 10
        
    }
});

export default styles;