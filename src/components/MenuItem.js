import React, { Component } from 'react';
import { 
	View,
	Dimensions,
	Pressable,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '@styles';
import { Text } from './StyledText';
import normalize from '@helpers/NormalizedText';

const { width } = Dimensions.get('window');

const styles = {

	buttonStyle: {
    width: 60, 
    height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5
	},
	buttonStyleDisable: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#ececec',
		justifyContent: 'center',
		borderRadius: 15,
		height: 50,
		margin: 10
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 14
	},
	buttonCircleContainer: {
		maxWidth: 80,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginVertical: 5,
		marginHorizontal: width > 480 ? 20 : width > 360 ? 8 : 5,
	},
	buttonCircleStyle: {
		backgroundColor: 'white',
    width: width > 480 ? 65 : width > 410 ? 55 : 50, 
    height: width > 480 ? 65 : width > 410 ? 55 : 50,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
		borderRadius: 30,
		shadowRadius: 10
	},
	buttonCircleStyleDisable: {
		backgroundColor: '#ddd',
    width: 60, 
    height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
		borderRadius: 30,
		elevation: 5,
		shadowRadius: 10
	},
	imageIcon: {
		width: 50,
		height: 50,
		overflow: 'hidden'
	}
};

class MenuItem extends Component {
	state = {
		imageIcon: this.props.icon
	}

	componentDidMount() {
	}

	render() {
		if (this.props.isCircle) {
			return (
				<View style={styles.buttonCircleContainer}>
					<Pressable
						accessible={this.props.accessible ? this.props.accessible : false}
						accessibilityLabel={this.props.accessibilityLabel ? this.props.accessibilityLabel : `button${this.props.children}Label`}
						testID={this.props.testID ? this.props.testID : `input${this.props.testID}`}
						onPress={this.props.onPress}
						style={[this.props.canSubmit ? (this.props.canSubmit['disable'] === false ? styles.buttonCircleStyle : styles.buttonCircleStyleDisable) : styles.buttonCircleStyle,  this.props.style]}
						disabled={this.props.loader || (this.props.canSubmit ? this.props.canSubmit['disable'] : false)}
						containerStyle={{ backfaceVisibility: 'visible', backgroundColor: 'transparent', }}
					>
						<View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 60, height: 60, flex: 1, }}>
							<Image 
								style={styles.imageIcon}
								source={this.state.imageIcon}
								resizeMode={'cover'}
							/>
						</View>
					</Pressable>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						<Text size={normalize(9)} color={colors.primaryDark} style={{ textAlign: 'center', }} numberOfLines={2}>
							{this.props.text || 'Others'}
						</Text>
					</View>
				</View>
			);
		}
		return (null);
	}
}

export default MenuItem;
