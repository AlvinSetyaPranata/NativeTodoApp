import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { HomeParamsType } from "../types/Routers";
import InputField from "../components/InputField";
import style from "../styles/Edit";

export interface propsType {
    route: RouteProp<HomeParamsType, "Edit">
    navigation: NavigationProp<HomeParamsType, "Edit">,
}


export default function Edit({ route, navigation }: propsType): React.ReactElement {

    const data = route.params.data

    // Alert.alert(JSON.stringify(data))


    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Edit your todo</Text>
            <View style={style.fieldContainer}>
                <InputField title="What do you want todo?" initialValue={data.what}/>
                <InputField title="When do you want todo?" initialValue={data.when}/>
                <InputField title="Where do you want todo?" initialValue={data.where}/>
            </View>

            <View style={style.buttonContainer}>
                <Pressable style={style.cancelButton} onPress={navigation.goBack}>
                    <Text style={style.actionTextButton}>Cancel</Text>
                </Pressable>

                <Pressable style={style.okButton}>
                    <Text style={style.actionTextButton}>Update Todo</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}