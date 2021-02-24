import React, { Component } from 'react';
import { View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '@components/StyledText';

const styles = {
	containerStyle: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 8
	},
	layoutBackground: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 5,
		height: 40,
	},
	iconContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: '#eee',
		padding: 8,
		height: 40,
		borderBottomLeftRadius: 5,
		borderTopLeftRadius: 5,
		overflow: 'hidden'
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

class Input extends Component {
	state = {
		passVisible: false,
	}
	componentDidMount() {
		if (this.props.onRef != null) {
			this.props.onRef(this);
		}
	}

	render() {
		if (this.props.isMainSearch) {
			return (
				<View style={[styles.containerStyle, this.props.flexItem]}>
					<View style={styles.layoutBackground}>
						<View style={styles.iconContainer}>
							<Icon size={22} name={'qrcode-scan'} color={'#666'} style={{}}></Icon>
						</View>
						<Pressable style={{ flex: 1 }} android_ripple={{ color: '#ccc', borderless: true, }} onPress={this.props.onPress}>
							<View style={styles.inputContainer}>
								<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
									<Icon size={16} name={'magnify'} color={'#888'}></Icon>
									<Text size={14} color={'#888'}>{this.props.placeholder}</Text>
								</View>
							</View>
						</Pressable>
					</View>
				</View>
			);
		}
		return null;
	}
}

export default Input;
