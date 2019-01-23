import React from "react";
import {View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default () => (<View style={{flex:1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
	<Icon size={50} name="android"/>
	<Icon size={50} name="explore" color="blue" />
	<Icon size={50} name="grade" color="green" />
	<Icon size={50} name="credit-card" color="pink" />

	<TouchableOpacity
		onPress={() => alert("test")}>
		<Icon size={50} name="credit-card" color="pink" />
	</TouchableOpacity>
</View>);