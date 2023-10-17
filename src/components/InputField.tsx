import React from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import style from '../styles/components/InputField';

interface propsType {
  title: string;
  initialValue?: string,
  onValueChange?: () => void
}

export default function InputField({title, initialValue="", onValueChange}: propsType): JSX.Element {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TextInput onChange={onValueChange} defaultValue={initialValue} style={style.inputField}/>
    </View>
  );
}
