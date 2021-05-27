import React,{useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from '../database/firebase';
const CreateUser = (props) =>{

    const [state,setState] = useState({
        name:"",
        email:"",
        senha:"",
    });


const handleChangeText = (name,value)=>{
    setState({...state, [name]: value})

};

const AddNewUser = async () =>{
    if (state.name=== '' ){
        alert('Por favor digite seu nome')
    }
    else{
        try{
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                senha: state.senha,
            })
                props.navigation.navigate('UserList');   
            }catch(error){
                console.log(error);
            }
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Nome" 
                    onChangeText={(value)=>handleChangeText('name',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="E-mail"
                    onChangeText={(value)=>handleChangeText('email',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Senha"
                    onChangeText={(value)=>handleChangeText('senha',value)}
                />
            </View>
            <View >
                <Button title="Registrar" onPress={()=> AddNewUser()}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35,
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',

    },


})

export default CreateUser