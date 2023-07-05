import React  from 'react';
import {TextInput } from 'react-native';
import estilos from  './estilo'
export default function CompoInteiro( {valor, acao}){

    const numeroEmTexto= String(valor);
    const atualiza = (novoValor, acaoRetorno) => {
        const varificaInteiro = novoValor.match(/^[0-9]*$/);

        if(!varificaInteiro) return;
        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/,'$2');
        acaoRetorno(removeZeroEsquerda);
    }
    return <TextInput
        style={estilos.campo}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText ={(novoValor)=> {atualiza(novoValor,acao)}}
        value={numeroEmTexto}
    />


}