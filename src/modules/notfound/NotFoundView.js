import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { fonts, colors } from '../../styles';

const { width } = Dimensions.get('window');

export default function NotFoundScreen(props) {
  return (
    <ImageBackground
      source={null}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.availableText}>Sorry this page is</Text>
        <Text style={styles.availableTextItalic}>under construction</Text>
      </View>
      <Image
        source={require('@images/pages/grab-text.png')}
        style={styles.nerdImage}
        resizeMode={'contain'}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  nerdImage: {
    maxWidth: 250,
    width: width - 100,
    height: 150,
    borderWidth: 1,
  },
  availableText: {
    color: colors.primaryDark,
    fontFamily: fonts.primaryLight,
    fontSize: 26,
  },
  availableTextItalic: {
    color: colors.primaryDark,
    fontFamily: fonts.primaryBold,
    fontSize: 30,
    fontStyle: 'italic',
    lineHeight: 30
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});
