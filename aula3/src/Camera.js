import React from "react";
import { RNCamera } from 'react-native-camera';

export default () => (<RNCamera
	style={{flex:1}}
	type={RNCamera.Constants.Type.back}
	flashMode={RNCamera.Constants.FlashMode.on}
	permissionDialogTitle={'Permission to use camera'}
	permissionDialogMessage={'We need your permission to use your camera phone'}
	captureAudio={false}
/>);