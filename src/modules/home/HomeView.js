import React, { useState, useEffect } from 'react';
import {
  View,
	ImageBackground,
	Image,
  Dimensions,
	ScrollView,
	Pressable,
  RefreshControl,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { 
	Input,
	MenuItem
} from '@components';
import { colors } from '@styles';

import styles from './Styles';
import { Text } from '../../components/StyledText';
import menus from './Menus';

const { width } = Dimensions.get('window');

export default function HomeScreen(props) {

	const [isRefreshing, setIsRefreshing] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		return () => {}
	}, [])

	const refreshView = async () => {
		setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
	}

	const openPage = (page) => {
		try {
			props.navigation?.navigate(page);
		} catch (ex) {
			props.navigation?.navigate('Auth');
			console.warn('ex', ex)
		}
	}

	const _renderItemSlider = ({ item, index }) => {

		if (index == (menus.length - 1)) {
			return(
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 5, height: width > 480 ? 140 : 120, width: 80, }}>
					<Pressable style={styles.walletPress} android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => openPage('Auth')}>
						<View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 30, padding: 10, height: 50, width: 50, }}>
							<IconAntDesign name={'arrowright'} size={30} color={'#555'}></IconAntDesign>
						</View>	
					</Pressable>			
				</View>
			)
		}

		return (
			<View style={styles.itemSliderContainer}>
				{item.image ? <ImageBackground
					source={item.image}
					style={{ height: width > 480 ? 140 : 120 }}
					imageStyle={{ borderRadius: 5 }}
					resizeMode="cover"
				></ImageBackground> : null}
				<View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
					<Text size={16} color={'#333'} numberOfLines={2}>{item.title}</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
						<Text size={12} color={'#333'} numberOfLines={2}>{item.range} {' • '}</Text>
						<IconMatCom name={'star'} size={14} color={colors.primaryYellow}/> 
						<Text size={12} color={'#333'} numberOfLines={2}>{item.rate}</Text>
					</View>
				</View>
			</View>
		)
	}

	const _renderFrontMenus = () => {
		return (
			<View 
				style={styles.frontMenusContainer}
			> 
				{ 
					menus?.map((v, index) => (
						<MenuItem isCircle text={v.name} icon={v.icon} onPress={() => openPage('Auth')} key={index}/>
					))
				}
			</View>
		);
	}

  return (
    <View style={styles.container}>
				<ScrollView 
					contentContainerStyle={{ flexGrow: 1 }}
					refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={refreshView}
            />
					}
					onScrollToTop={(e)=> console.warn('event', e) }
				>
					<View style={styles.section}>

						<View style={styles.mainSearchContainer}>
							<View style={{ flexDirection: 'row', padding: 5 }}>
								<Input
									isMainSearch
									placeholder={'Cari di aplikasi grab'}
									onPress={() => openPage('Auth')}
								/>
							</View>
						</View>

						<View style={styles.pointContainer}>
							<Pressable style={{ flex: 3 }} android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => openPage('Auth')}>
								<View style={styles.pointButtonLayout}>
									<View style={styles.circleBorder}>
										<Text size={9} color={'#4b2489'} bold>OVO</Text>
									</View>
									<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
										<Text size={11} color={'#aaa'} bold style={{ paddingHorizontal: 2 }}>Rp</Text>
										<Text size={14} color={'#333'}>120.700</Text>
									</View>
									<Icon name={'chevron-small-right'} size={18} color={'#ddd'}/>
								</View>
							</Pressable>
							<Pressable style={{ flex: 3 }} android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => openPage('Auth')}>
								<View style={[styles.pointButtonLayout, styles.centerSeparator]}>
									<View style={styles.circleBorder}>
										<IconMatCom name={'crown'} size={16} color={colors.primaryGreen} style={{ borderRadius: 20 }}/>
									</View>
									<View style={{ flexDirection: 'column' }}>
										<Text size={14} color={'#333'}>10.273 Poin</Text>
									</View>
									<Icon name={'chevron-small-right'} size={18} color={'#ddd'}/>
								</View>
							</Pressable>
						</View>

						<View style={styles.walletContainer}>
							<View style={styles.walletButtonLayout}>
								<Pressable style={styles.walletPress} android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => openPage('Auth')}>
									<IconIon name={'wallet-outline'} size={25} color={'#333'}></IconIon>
									<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
										<Text size={14} color={'#333'} bold>Isi Ulang </Text>
										<Text size={14} color={'#333'} >• Wallet</Text>
									</View>
								</Pressable>
							</View>
						</View>

						<View style={styles.menuItemsContainer}>
							{_renderFrontMenus()}
						</View>

						<View style={styles.contentSliderContainer}>
							<View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
								<Text size={20} color={'#555'} bold>Restoran yang kamu sukai</Text>
								<View style={{ backgroundColor: '#efefef', borderRadius: 10, marginLeft: 10 }}>
									<IconAntDesign name={'arrowright'} size={12} color={'#333'}></IconAntDesign>
								</View>
							</View>
							<Carousel
								data={[...menus]}
								renderItem={_renderItemSlider.bind(this)}
								sliderWidth={width}
								itemWidth={((width/2)-30)}
								inactiveSlideOpacity={1}
								inactiveSlideScale={1}
								containerCustomStyle={{ margin: 0, marginHorizontal: 5 }}
								slideStyle={{ width: ((width/2)-30), flex: 1}}
								enableSnap={true}
								activeSlideAlignment={'start'}
								onSnapToItem={(index) => setActiveSlide(index)}
							/>
						</View>

						<View style={styles.threeMenusContainer}>
							<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
								<Text size={20} color={'#555'} bold>Lebih banyak lagi untukmu</Text>
								<Pressable android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => props.navigation?.navigate('Auth')}>
									<Text size={16} color={'#1f7ec7'} bold>Jasa Lainnya</Text>
								</Pressable>
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10 }}>
								{
									menus.map((m, i) => {
										if (m.isThreeMenus) {
											return (
												<View style={{ marginHorizontal: 5 }} key={i}>
												<Pressable android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => props.navigation?.navigate('Auth')}>
													<View style={styles.threeMenusLayout}>
														<View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 8 }}>
															<Text size={14} color={'#333'} bold>{m.name}</Text>
															<Text size={12} color={'#888'}>{m.description}</Text>
														</View>
														<Image 
															source={m.icon}
															style={{ width: 50, height: 50, alignSelf: 'flex-end', margin: 8 }}
														/>
													</View>
												</Pressable>
												</View>
											)
										}
									})
								}
							</View>
						</View>

						<View style={styles.contentSliderContainer}>
							<View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
								<Text size={20} color={'#555'} bold>Buatmu si petualang rasa</Text>
								<View style={{ backgroundColor: '#efefef', borderRadius: 10, marginLeft: 10 }}>
									<IconAntDesign name={'arrowright'} size={12} color={'#333'}></IconAntDesign>
								</View>
							</View>
							<Carousel
								data={[...menus].reverse()}
								renderItem={_renderItemSlider.bind(this)}
								sliderWidth={width}
								itemWidth={((width/2)-30)}
								inactiveSlideOpacity={1}
								inactiveSlideScale={1}
								containerCustomStyle={{ margin: 0, marginHorizontal: 5 }}
								slideStyle={{ width: ((width/2)-30), flex: 1}}
								enableSnap={true}
								activeSlideAlignment={'start'}
								onSnapToItem={(index) => setActiveSlide(index)}
							/>
						</View>

						<View style={styles.threeMenusContainer}>
							<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
								<Text size={20} color={'#555'} bold>Terus Menjelajah</Text>
							</View>
							<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', margin: 10 }}>
								{
									[...menus, ...menus].map((m, i) => {
										return (
											<View style={{ margin: 5 }} key={i}>
												<Pressable android_ripple={{ color: '#ccc', borderless: true, }} onPress={() => props.navigation?.navigate('Auth')}>
													<View style={styles.moreContentItem}>
													{m.image ? 
														<ImageBackground
															source={m.image}
															style={{ flex: 1 }}
															imageStyle={{ borderRadius: 5 }}
															resizeMode="cover"
														></ImageBackground> 
													: null}
													</View>
													<View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: ((width / 2) - 20), height: 50, marginVertical: 5 }}>
														<Text size={16} color={'#333'} numberOfLines={2} bold>{m.title}</Text>
														<View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
															<IconMatCom name={'calendar-today'} size={14} color={'#888'}/> 
															<Text size={12} color={'#888'} numberOfLines={2} style={{ marginLeft: 5 }}>Sampai 29 Maret</Text>
														</View>
													</View>
												</Pressable>
											</View>
										)
									})
								}
							</View>
						</View>

						<View style={{ flexDirection: 'column', alignItems: 'center', paddingBottom: 20 }}>
							<Text size={16} color={'#888' }>Itu aja untuk sekarang.</Text>
							<Text size={14} color={'#333'}>Author</Text>
							<Text size={14} color={'#888'} bold>(Yuddi Prasetyo - yuddi.0708@gmail.com)</Text>
						</View>

					</View>
				</ScrollView>
			
    </View>
  );
}