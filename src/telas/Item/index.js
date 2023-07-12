import React, {useState} from 'react';
import {View ,Text, TouchableOpacity, TextInput} from 'react-native';
import estilos from  './estilo';
import Botao from '../../componentes/Botao'
import CampoInteiro from '../../componentes/campoInteiro';

export default function Item({nome, preco, descricao}){
  const [quantidade , setQuantidade ] = useState(1);
  const [total , setTotal] = useState(preco);
  const [expandir , setExpnadir] = useState(false);
  const atualizaQuantidadeTotal =(novaQuantidade) =>{
  setQuantidade(novaQuantidade);
  calculaTotal(novaQuantidade);
  }
  const calculaTotal = (quantidade)=> {
    setTotal(quantidade * preco)
  
  }
  const inverterExpandir = () =>{
     setExpnadir(!expandir);
     atualizaQuantidadeTotal(1);
  }
  return <>
  <TouchableOpacity style={estilos.informacao} onPress={inverterExpandir}>
    <Text style={estilos.nome}>{ nome }</Text>
    <Text style={estilos.descricao}>{ descricao }</Text>
    <Text style={estilos.preco}>{ 
      Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
      }).format(preco)
    }</Text>
  </TouchableOpacity>
  {expandir &&
    <View style={estilos.carrinho}>
      <View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade:</Text>
          
         
          <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} ></CampoInteiro >
        </View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Total:</Text>
          <Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(total)
          }</Text>
        </View>
      </View>
      <Botao valor="Adicionar ao Carrinho" acao={() => {}} />
    </View>
  }
  <View style={estilos.divisor} />
</>
}