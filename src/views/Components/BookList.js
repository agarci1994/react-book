import React from "react";
import {Text, View} from 'react-native'

export default function BookList({book}){
    return <View><Text>{book.title}</Text></View>
}