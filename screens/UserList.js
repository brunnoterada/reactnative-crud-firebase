import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import firebase from '../database/firebase';
import {ListItem, Avatar}from 'react-native-elements';

const UserList = (props) =>{

    const [users,setUsers] = useState([])

    useEffect (() => {
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users =[];
            
            querySnapshot.docs.forEach(doc =>{
                const {name, email, senha} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    senha
                })
            });
            setUsers(users)
        });
    }, [])
    return(
        <ScrollView>
            <Button title="Create User" onPress={() => props.navigation.navigate('CreateUser')}/>
            {
                users.map(user =>{
                    return(
                        //lista que exibe os usuários
                        <ListItem key={user.id} bottomDivider onPress={() => 
                        props.navigation.navigate('UserDetail',{
                            userId: user.id
                        })
                        }>
                            <ListItem.Chevron/>
                            <Avatar source={{uri:'https://avatars.githubusercontent.com/u/66955351?v=4'}}/>

                            <ListItem.Content>

                                <ListItem.Title>
                                    {user.name}
                                </ListItem.Title>

                                <ListItem.Subtitle>
                                    {user.email}
                                </ListItem.Subtitle>

                            </ListItem.Content>

                        </ListItem>
                    )
                })
            }
        </ScrollView>
    );
};

export default UserList