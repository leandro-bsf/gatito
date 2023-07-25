import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Servicos from '../src/telas/Servicos';
import Carrinho from './telas/Carrinho';
import {cores} from './telas/estilos'

const Tab =  createBottomTabNavigator();
 export default function Rotas () {

    return  <NavigationContainer>
             <Tab.Navigator 
              tabBarOptions={{
              
                activeTintColor: cores.roxo,
                inactiveTintColor: cores.claro,
                activeBackgroundColor: cores.roxo,

                style: {
                     height: 70, 
                },
                labelStyle: {   
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 30,
                    marginTop:  3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja,
                    
                },
                tabBarHideOnKeyboard: false, // nao funciono serveria para quando abrir o teclado desaparece o barra de servico / carrinho
              }}>
             <Tab.Screen name="Servicos " component={Servicos}/>
             <Tab.Screen name="Carrinho" component={Carrinho}/>
             </Tab.Navigator>
         </NavigationContainer>
 }