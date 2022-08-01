import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { db } from '../server/conexion';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";



const SRdelete = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            margin: 10,
            backgroundColor: '#0e0e12',
        },
        Sec:{
            textAlign: 'center', 
            fontWeight: 'bold',
        },
        Titulo: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#f51818'
            
        },
        Subtitulo:{
            fontSize: 25,
            color: '#ffffff'
        },
        boton:{
            margin: 10,
            minWidth: "80%",
            justifyContent:'center',
            alignItems:'center',
        },
      });

    const [elementos, setelementos]=useState([])

    async function leer(){
        const querySnapshot = await getDocs(collection(db, "Ropa"));
        const articulos=[];
            querySnapshot.forEach((doc) => {
            const {Nombre, Talla, Color,  Precio, Existencia, Categoria}=doc.data()
    
            articulos.push({
                Id:doc.id,
                Nombre,
                Talla,
                Color,
                Precio,
                Existencia,
                Categoria
            })
    })
        setelementos(articulos)
    }

    async function eliminar(iden){
        await deleteDoc(doc(db, "Ropa", iden));
        alert("La prenda se elimino correctamente");
        leer();
    }

    return (
        <ScrollView style={styles.Sec}>
        <Text  style={styles.Titulo} >Boutique Online</Text>

        <Button title="Catalogo"  onPress={() =>leer()}>Cargar Productos</Button>
        {
        elementos.map(elemento=>{
            return(
                <TouchableOpacity 
                key={elemento.Id}
                onPress={() => eliminar(elemento.Id)}
                >
                <View style={styles.Contenedor} >
                <Text style={styles.Titulo}>{elemento.Nombre}</Text>
                <Text style={styles.Subtitulo}>Talla:{elemento.Talla}</Text>
                <Text style={styles.Subtitulo}>Color:{elemento.Color}</Text>
                <Text style={styles.Subtitulo}>Precio:${elemento.Precio}</Text>
                <Text style={styles.Subtitulo}>Existencia:{elemento.Existencia} piezas</Text>
                <Text style={styles.Subtitulo}>Categoria:{elemento.Categoria}</Text>
                </View>
                </TouchableOpacity  >
            );
        })
        }
        </ScrollView>
    )
}

export default SRdelete