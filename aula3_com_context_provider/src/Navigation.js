import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Provider, { withStorageAndAction } from "./Provider";

import Icons from "./Icons";
import Maps from "./Maps";
import Camera from "./Camera";

// Estrutura de Navegação
// - Stack
// --- Tabs
// ------ Inicial
// ------ Icons
// ------ Maps
// ------ Camera
// --- Stack1

const Inicial = (props) => (<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
    <Text style={{fontSize: 60}}>{props.storage.count || 0}</Text>
    <Button title="Abrir Stack 1" onPress={ () => props.navigation.navigate("Stack1") } />
    <Button title="Mudar contador para 50" onPress={ () => props.action.changeCount50() } />
</View>);

// Configurando Tab Navigator
const tabsNavigationConfig = {
    "Inicial": {
        screen: withStorageAndAction(Inicial)
    },
    "Icons": {
        screen: Icons
    },
    "Maps": {
        screen: Maps
    },
    "Camera": {
        screen: Camera
    }
};

const TabNavigator = createBottomTabNavigator(tabsNavigationConfig);

// Configurando Stack Navigator

const Stack1 = (props) => (<View>
    <Text>Eu sou uma tela em stack!</Text>
    <Text style={{fontSize: 60}}>{ props.storage.count || 0 }</Text>
    <Button title="Mudar contador para 20" onPress={ () => props.action.changeCount20() } />
</View>);

const stackNavigationConfig = {
    "Tabs": {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    "Stack1": {
        screen: withStorageAndAction(Stack1),
        navigationOptions: {
            title: "Tela em Stack 1"
        }
    }
};

const StackNavigator = createStackNavigator(stackNavigationConfig);

const AppContainer = createAppContainer(StackNavigator);

export default () => (<Provider>
    <AppContainer />
</Provider>);