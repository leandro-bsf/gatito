import  React from 'react';
import {  FlatList} from 'react-native';

import Item from './Item';
import TelaPadrao from '../../telas/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho'

const servicos = [
    {
      id: 1,
      nome: "banho",
      preco: 79.90,
      descricao: "nao de banho do seu gato",
      quantidade: 5
    },
    {
      id: 2,
      nome:"vacina V4",
      preco: 79.90,
      descricao: "uma doce da vacina V4",
      quantidade: 2
    },
  
  {
    id: 3,
    nome: "vacina antirrabita",
    preco: 99.90,
    descricao: "uma doce vaicna",
    quantidade: 3
  
  }
  ];
export default function Carrinho(){
  const total = servicos.reduce((soma, {preco, quantidade} )=>soma+(preco*quantidade) ,0)
     return <>
    
      <StatusCarrinho total={total}/>
     <FlatList
       data={servicos}
       renderItem={({item}) => <Item {...item}  />}
       keyExtractor={({id}) => String(id)}
     />
     
   </>
      
}