import React from 'react';
import {useState} from 'react'
import {ScrollView, Button, View, StyleSheet, TextInput, Text } from 'react-native';
import { db } from '../server/conexion';
import { collection, addDoc } from "firebase/firestore";

const SRadd = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 20
        },
        Button: {
            margin: 10,
            minWidth: "40%",
            textAlign: "center",
          },
      });


      const [elementos, setelement]=useState({
        nombre:'',
        talla:'',
        color:'',
        precio:'',
        existencia:'',
        categoria:''
      })

      const capturar =(atrib,valor) =>{
        setelement({...elementos,[atrib]:valor})
        console.log(elementos)
        }


      async function agregar(){
          if(elementos.nombre === '' | elementos.talla === ''
             | elementos.color === '' | elementos.precio === ''
             | elementos.existencia === '' | elementos.categoria === ''){
          alert('Para agregar una prenda llena todos los campos que estan vacios')
          }else{
          
            try {

              const precio = parseFloat(elementos.precio)
              const existencia= parseInt(elementos.existencia)

              await addDoc(collection(db, "Ropa"), {
                Nombre:elementos.nombre,
                Talla:elementos.talla,
                Color:elementos.color,
                Precio:precio,
                Existencia:existencia,
                Categoria:elementos.categoria
              });
              alert('Se agrego correctamente la prenda')
            } catch (e) {
              alert("Error al agregar la prenda: ", e);
            }
            
          }
       
        }

    return (
        <View style={styles.Contenedor}>

        <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(value)=>capturar('nombre',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Talla"
        onChangeText={(value)=>capturar('talla',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Color"
        onChangeText={(value)=>capturar('color',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Precio"
        onChangeText={(value)=>capturar('precio',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Existencia"
        onChangeText={(value)=>capturar('existencia',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        onChangeText={(value)=>capturar('categoria',value)}
        />

<View  style={styles.Button}>
    <Button
        title="Agregar" 
        color="#de0c09"
        onPress={()=>agregar()}>Agregar
    </Button>
</View>
        
        </View>
        )
}

export default SRadd