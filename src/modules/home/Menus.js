
const allMenus = [ 
  {
    _id: 1,
    id: 'food',
    name: 'Makanan',
    icon: require('@images/icons/PNG/01.png'),
    image: require('@images/food/food1.png'),
    title: 'Ayam Krenyes krenyesss',
    range: '0.3 km',
    rate: 4.7
  },
  {
    _id: 2,
    id: 'mart',
    name: 'Mart',
    icon: require('@images/icons/PNG/02.png'),
    image: require('@images/food/food2.png'),
    title: 'Nasi Goreng Van Veliya',
    range: '0.7 km',
    rate: 4.2
  },
  {
    _id: 3,
    id: 'express',
    name: 'Express',
    icon: require('@images/icons/PNG/03.png'),
    description: 'Pengiriman Cepat',
    isThreeMenus: true,

    image: require('@images/food/food3.png'),
    title: 'Siomay Bajuri',
    range: '2.1 km',
    rate: 4.0
  },
  {
    _id: 4,
    id: 'token',
    name: 'Pulsa/Token',
    icon: require('@images/icons/PNG/04.png'),
    description: 'Isi Ulang',
    isThreeMenus: true,

    image: require('@images/food/food4.png'),
    title: 'Bakso dan Mie Ayam Berkah',
    range: '2.2 km',
    rate: 4.5
  },
  {
    _id: 5,
    id: 'car',
    name: 'Mobil',
    icon: require('@images/icons/PNG/05.png'),
    image: require('@images/food/food5.png'),
    title: 'Ayam Geprek & Gulai Kambing Haji Aswanih',
    range: '2.3 km',
    rate: 3.7
  },
  {
    _id: 6,
    id: 'motorcycle',
    name: 'Motor',
    icon: require('@images/icons/PNG/06.png'),
    image: require('@images/food/food3.png'),
    title: 'Soda Susu Nikmaat',
    range: '3.6 km',
    rate: 4.0
  },
  {
    _id: 7,
    id: 'insurance',
    name: 'Asuransi',
    icon: require('@images/icons/PNG/07.png'),
    description: 'Tetap terlindungi',
    isThreeMenus: true,

    image: require('@images/food/food5.png'),
    title: 'Makanan Khas Sunda',
    range: '5.3 km',
    rate: 4.7
  },
  {
    _id: 8,
    id: 'others',
    name: 'Lainnya',
    icon: require('@images/icons/PNG/08.png'),
    image: require('@images/food/food4.png'),
    title: 'Bawang Hitam Lezaat',
    range: '6.1 km',
    rate: 3.7
  },
];

export default allMenus