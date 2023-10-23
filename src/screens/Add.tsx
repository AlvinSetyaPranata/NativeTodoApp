import React, { useRef, useState } from "react";
import { Alert, Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
import { HomeParamsType } from "../types/Routers";
import {InputField} from "../components/InputField";
import style from "../styles/Edit";

export interface propsType {
    // route: RouteProp<HomeParamsType, "Add">
    navigation: NavigationProp<HomeParamsType, "Add">,
}


export default function Edit({ navigation }: propsType): React.ReactElement {
    const [alert, setAlert] = useState()

    const whatRef = useRef<TextInput|null>(null)
    const whenRef = useRef<TextInput|null>(null)
    const whereRef = useRef<TextInput|null>(null)

    const addHandler = () => {
        if (whatRef != null) {
            Alert.alert("Hello", JSON.stringify(whatRef.current!.value))
        }
    }
 
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Add your todo's</Text>
            <View style={style.fieldContainer}>
                <InputField ref={whatRef} title="What do you want todo?" />
                <InputField ref={whenRef} title="When do you want todo?" />
                <InputField ref={whereRef} title="Where do you want todo?" />
            </View>

            <View style={style.buttonContainer}>
                <Pressable style={style.cancelButton} onPress={navigation.goBack}>
                    <Text style={style.actionTextButton}>Cancel</Text>
                </Pressable>

                <Pressable style={style.okButton} onPress={addHandler}>
                    <Text style={style.actionTextButton}>Add Todo</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}