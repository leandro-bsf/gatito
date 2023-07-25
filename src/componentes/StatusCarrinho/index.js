import React from 'react'
import {View, Text } from 'react-native'
import estilo from './estilo'
import Botao from '../Botao'
export default function StatusCarrinho({total}){
  return <View style={estilo.conteudo}>
        <View style={estilo.total}>
         <Text style={ estilo.descricao}>Total do Carrinho: </Text>
         <Text style={estilo.valor}>{total}</Text>
        </View>
       <View style={estilo.botao}>
            <Botao valor='Concluir Pedido' invertido/>
       </View>
        </View>
}