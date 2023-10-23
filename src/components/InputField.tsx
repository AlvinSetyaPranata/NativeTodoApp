import React from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import style from '../styles/components/InputField';
import { InputFieldPropsType } from '../types/components/InputField';



// export InputField React.forwardRef({title, initialValue="", onValueChange}: propsType): JSX.Element {
//   return (
    // <View style={style.container}>
    //   <Text style={style.title}>{title}</Text>
    //   <TextInput onChange={onValueChange} defaultValue={initialValue} style={style.inputField}/>
    // </View>
//   );
// }


export const InputField = React.forwardRef<TextInput, InputFieldPropsType>((props, ref) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
      <TextInput value='' ref={ref} onChange={props.onValueChange} defaultValue={props.initialValue} style={style.inputField}/>
    </View>
  )
})