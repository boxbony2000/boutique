import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, Text, Image } from 'react-native';
import { db } from '../Server/Conexion';
import { collection, getDocs } from "firebase/firestore";

const logo = {
    uri: 'https://i.ibb.co/1MLKF1P/logo-1.png',
    width: 400,
    height: 320,
    marginTop: 30,
  };
const SRinfo = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            margin: 10,
            backgroundColor: '#750f13',
        },
        Sec:{
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: '#000000',
        },
        Subtitulo:{
            fontSize: 25,
            color: '#ffffff'
        },
        Titulo: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#000000',
        },
      });


    const [elementos, setelementos]=useState([])

    async function leer(){
        const querySnapshot = await getDocs(collection(db, "Ropa"));
        const articulos=[];
            querySnapshot.forEach((doc) => {
            const {Nombre, Talla, Color, Precio, Existencia, Categoria}=doc.data()
    
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



    return (
        <ScrollView style={styles.Sec}>
            <Image source={logo} />
        <Button title="Ver Informacion"  onPress={() =>leer()}>Ver Informacion</Button>
        {
        elementos.map(elemento=>{
            return(
                <View style={styles.Contenedor} key={elemento.Id}>
                <Text style={styles.Titulo}>{elemento.Nombre}</Text>
                <Text style={styles.Subtitulo}>Talla:{elemento.Talla}</Text>
                <Text style={styles.Subtitulo}>Color:{elemento.Color}</Text>
                <Text style={styles.Subtitulo}>Precio:${elemento.Precio}</Text>
                <Text style={styles.Subtitulo}>Existencia:{elemento.Existencia} piezas</Text>
                <Text style={styles.Subtitulo}>Categoria:{elemento.Categoria}</Text>
                </View>
            );
        })
        }
        </ScrollView>
    )
}

export default SRinfo