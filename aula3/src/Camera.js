import React from "react";
import {View, Button} from "react-native"
import { RNCamera } from 'react-native-camera';

var camera;

export default () => (
	<View style={{flex:1}}>
		<RNCamera
			ref={(ref) => {
				camera = ref;
			}}
			style={{flex:1}}
			type={RNCamera.Constants.Type.back}
			flashMode={RNCamera.Constants.FlashMode.on}
			permissionDialogTitle={'Permission to use camera'}
			permissionDialogMessage={'We need your permission to use your camera phone'}
			captureAudio={false}
		/>
		<View >
			<Button onPress={() => {
				camera.takePictureAsync({})
					.then((img) => {
						alert(JSON.stringify(img))
					})
					.catch(err => console.error(err))
			}}
					title={"Tira foto"}/>
		</View>
	</View>
);