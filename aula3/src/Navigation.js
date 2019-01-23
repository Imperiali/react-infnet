import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';

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

const Inicial = (props) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Clicae" onPress={() => props.navigation.navigate("Stack1")} />
    </View>
);

// Configurando Tab Navigator
const tabsNavigationConfig = {
    "Inicial": {
        screen: Inicial
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

const stackNavigationConfig = {
    "Tabs": {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    "Stack1": {
        screen: () => <Text>Eu sou uma tela em stack!</Text>,
        navigationOptions: {
            tabBarVisible: false,
            title: "Tela em Stack 1"
        }
    }
};

const StackNavigator = createStackNavigator(stackNavigationConfig);



export default createAppContainer(StackNavigator);