import {
  StyleSheet,
  Dimensions
} from 'react-native';
import {
  fonts,
  colors
} from '@styles';

const {
  width,
  height
} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  section: {
    flex: 1,
  },
  mainSearchContainer: {
    width: '100%',
    backgroundColor: colors.primaryGreen
  },
  pointContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'rgb(245,245,245)'
  },
  pointButtonLayout: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  centerSeparator: {
    borderLeftWidth: 2,
    borderColor: 'rgb(245,245,245)',
  },
  circleBorder: {
    borderColor: '#ddd',
    width: 25,
    height: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15
  },
  walletButtonLayout: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  walletPress: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 10,
  },
  menuItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: 'rgb(245,245,245)',
    borderBottomWidth: 2,
  },
  frontMenusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  contentSliderContainer: {
    padding: 5,
  },
  itemSliderContainer: {
    height: width > 480 ? 190 : 170,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  threeMenusContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  threeMenusLayout: {
    width: ((width / 3) - 15),
    height: ((width / 3) - 20),
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  moreContentItem: {
    width: ((width / 2) - 20),
    height: ((width / 2) - 15),
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },



sectionLarge: {
  flex: 2,
  justifyContent: 'space-around',
},
sectionHeader: {
  marginBottom: 8,
},
priceContainer: {
  alignItems: 'center',
},
description: {
  padding: 15,
  lineHeight: 25,
},
titleDescription: {
  color: '#19e7f7',
  textAlign: 'center',
  fontFamily: fonts.primaryRegular,
  fontSize: 15,
},
title: {
  marginTop: 30,
},
price: {
  marginBottom: 5,
},
priceLink: {
  borderBottomWidth: 1,
  borderBottomColor: colors.primary,
},
badgeNotifContainer: {
  width: 20,
  height: 20,
  borderRadius: 15,
  backgroundColor: colors.primaryGreen,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: 7,
  top: 2,
  elevation: 2
},
imageProfile: {
  width: width > 480 ? 70 : 60,
  height: width > 480 ? 70 : 60,
  borderRadius: 80,
  alignSelf: 'center',
  top: width > 480 ? 5 : 2,
},
groupMenusHeader: {
  marginLeft: 16,
  marginTop: 16,
  flexDirection: 'row',
  flexWrap: 'wrap'
},
groupMenusChildren: {
  marginLeft: 16,
  marginBottom: 5,
  flexDirection: 'row',
  flexWrap: 'wrap'
}
});

export default styles;