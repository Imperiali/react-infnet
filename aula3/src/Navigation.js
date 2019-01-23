import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/MaterialIcons";

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
    <View style={{backgroundColor:"black", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button color={"red"} title="Clicae" onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())
        } />
    </View>
);

// Configurando Tab Navigator
const tabsNavigationConfig = {
    "Maps": {
        screen: Maps,
        navigationOptions:{
            tabBarIcon: <Icon name="android"/>

        }
    },
    "Inicial": {
        screen: Inicial
    },
    "Icons": {
        screen: Icons
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

const DrawerNavigator = createDrawerNavigator(stackNavigationConfig);



export default createAppContainer(DrawerNavigator);