import  React from 'react';
import { SafeAreaView, StatusBar , FlatList, KeyboardAvoidingView, Platform} from 'react-native';
import Item from '../Item';
import Estiloglobal from '../estilos';
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
      preco: 79.90,
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
     return <SafeAreaView style={Estiloglobal.preencher}>
      <StatusBar/>
      
     <FlatList
       data={servicos}
       renderItem={({item}) => <Item {...item}  />}
       keyExtractor={({id}) => String(id)}
     />
     
   </SafeAreaView>
      
}