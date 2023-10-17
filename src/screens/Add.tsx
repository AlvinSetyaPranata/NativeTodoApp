import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { HomeParamsType } from "../types/Routers";
import InputField from "../components/InputField";
import style from "../styles/Edit";

export interface propsType {
    route: RouteProp<HomeParamsType, "Add">
    navigation: NavigationProp<HomeParamsType, "Add">,
}


export default function Edit({ route, navigation }: propsType): React.ReactElement {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Add your todo</Text>
            <View style={style.fieldContainer}>
                <InputField title="What do you want todo?" />
                <InputField title="When do you want todo?" />
                <InputField title="Where do you want todo?" />
            </View>

            <View style={style.buttonContainer}>
                <Pressable style={style.cancelButton} onPress={navigation.goBack}>
                    <Text style={style.actionTextButton}>Cancel</Text>
                </Pressable>

                <Pressable style={style.okButton}>
                    <Text style={style.actionTextButton}>Add Todo</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}