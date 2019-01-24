import React from "react";
import MapView, { Marker } from 'react-native-maps';

export default () => {

	onRegionChange = (region) => {
		alert(region.latitude);
	};

	return (
		<MapView
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			onRegionChangeComplete={this.onRegionChange}
			style={{flex: 1}}>
			<Marker
				draggable
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324
				}}
				title="Marcador 1"
				description="Hello World"
			/>

			<Marker
				draggable
				coordinate={{
					latitude: 37.78827,
					longitude: -122.4328
				}}
				title="Marcador 1"
				description="Hello World"
			/>	
		</MapView>
	);
};