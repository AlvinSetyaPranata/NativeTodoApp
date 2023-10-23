import React from "react";
import { Pressable, Text } from "react-native";
import style from "../styles/components/TodoList"


interface propsType {
    title: string,
    date: string,
    location: string,
    onClick: (idx: number) => void,
    id: number
}


export default function TodoList({title, date, location, onClick, id}: propsType) {
    return (
        <Pressable onPress={() => onClick(id)} style={style.container}>
            <Text style={style.textTitle}>{title}</Text>
            <Text style={style.textDate}>{date}</Text>
        </Pressable>
    )
}