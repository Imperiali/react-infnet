import React from "react";
import MapView, { Marker } from 'react-native-maps';

export default () => {

	onRegionChange = (region) => {
		alert(JSON.stringify(region))
	}

	return (
		<MapView
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			style={{flex: 1}}
		>
			<Marker
				draggable
				coordinate={{
					latitude: 37.78825,
					longitude: -122.4324,
				}}
				title={"Text"}
				description={"Descricao"}
			/>
		</MapView>
	)
};