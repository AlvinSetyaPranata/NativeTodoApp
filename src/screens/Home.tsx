import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from "../styles/Home"
import TodoList from '../components/TodoList';
import FloatingButton from '../components/FloatingButton';
import { NavigationProp } from '@react-navigation/native';


export interface propsType {
  navigation: NavigationProp<any, any>
}

export default function Home({navigation}: propsType): JSX.Element {

  const data = [
    {
      what : "Swimming",
      when: "Aug 21st",
      where: "Mariana Trench"
    },
    {
      what : "Swimming",
      when: "Aug 21st",
      where: "Mariana Trench"
    },
    {
      what : "Swimming",
      when: "Aug 21st",
      where: "Mariana Trench"
    },
  ]

  const onClick = (id: number) => {
    navigation.navigate("Edit", {id: id, data: data[id]})
  }

  return (
    <SafeAreaView style={style.wrapper}>
      <Text style={style.header}>Todo App</Text>
      <ScrollView>
        <View style={style.todoContainer}>
          {data.map((data, index)=> {
            return <TodoList key={index} title={data.what} date={data.when} location={data.where} id={index} onClick={onClick} />
          })}
        </View>
      </ScrollView>

      <FloatingButton title="+" onClick={() => navigation.navigate("Add")}/>
    </SafeAreaView>
  );
}
