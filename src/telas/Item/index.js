import React, {useState} from 'react';
import {View ,Text, TextInput, Button} from 'react-native';
import estilos from  './estilo';
import CompoInteiro from '../../componentes/compoInteiro';

export default function Item({nome, preco, descricao}){
  const [quantidade , setQuantidade ] = useState(1);
    return <>
    <View>
       <Text style={estilos.nome}>{nome}</Text>
       <Text style={estilos.descricao}>{descricao}</Text>
       <Text style={estilos.preco}>{preco}</Text>

     </View>
     <View style={estilos.carrinho}>
        <View>
              <View style={estilos.valor}>
                  <Text style={estilos.descricao}>Quantidade:</Text>
                  <CompoInteiro valor={quantidade} acao={setQuantidade}/>
              </View>

              <View style={estilos.valor}>
                  <Text style={estilos.descricao}>preco</Text>
                  <Text style={estilos.preco}> 0</Text>
              </View>

        </View>
              <Button title="Adicionar"/>
     </View>
     <View style={estilos.divisor}/>
     </>
}