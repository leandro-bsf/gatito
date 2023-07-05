import  React from 'react';
import {Text , SafeAreaView, StatusBar , FlatList} from 'react-native';
import Item from '../Item';
const servicos = [
    {
      id: 1,
      nome: "banho",
      preco: 79.90,
      descricao: "nao de banho do seu gato"
    },
    {
      id: 2,
      nome:"vacina V4",
      descricao: "uma doce da vacina V4"
    },
  
  {
    id: 3,
    nome: "vacina antirrabita",
    preco: 99.90,
    descricao: "uma doce vaicna"
  
  }
  ];
export default function Servicos(){
     return <SafeAreaView>
       < StatusBar/>
        <Text>Servicos!</Text>
        <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({item})=> <Item {...item}/>}
        keyExtractor={({id})=>String(id)}
        />
        </SafeAreaView>
      
}