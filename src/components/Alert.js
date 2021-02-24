import { Alert } from 'react-native';

export const callAlert = (title = null, message = null, menu = null) => {
	Alert.alert(title, message, menu, { cancelable: false });
};
