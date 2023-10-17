import React from "react";
import { Pressable, Text } from "react-native";
import style from "../styles/components/FloatingButton"



interface propsType {
    title: string,
    onClick: () => void
}

export default function FloatingButton({title, onClick}: propsType): React.ReactElement {
    return (
        <Pressable style={style.container} onPress={onClick}>
            <Text style={style.title}>{title}</Text>
        </Pressable>
    )
}