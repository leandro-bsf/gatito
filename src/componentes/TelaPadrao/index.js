import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal, { cores } from '../../telas/estilos';
import estilo from './estilo'

export default function TelaPadrao({ children }) {
  return <SafeAreaView style={estilo.ajusteTela}>
  <StatusBar backgroundColor={cores.roxo} />
  <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={estilosGlobal.preencher}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
}