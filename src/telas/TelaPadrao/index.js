import React from  'react'
import {SafeAreaView ,StatusBar} from 'react-native'
import Estiloglobal from '../estilos'

export default function TelaPadrao({children }){
 return <SafeAreaView style={Estiloglobal.preencher}>
 <StatusBar/>

    {children}


</SafeAreaView>
 
}