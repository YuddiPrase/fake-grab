import HomeScreen from '../home/HomeViewContainer';
import NotFound from '../notfound/NotFoundViewContainer';

const tabNavigationData = [
  {
    name: 'Beranda',
    component: HomeScreen,
    icon: 'shield-home',
  },
  {
    name: 'Aktivitas',
    component: NotFound,
    icon: 'update',
  },
  {
    name: 'Pembayaran',
    component: NotFound,
    icon: 'wallet',
  },
  {
    name: 'Kotak Masuk',
    component: NotFound,
    icon: 'message-processing',
  },
  {
    name: 'Akun',
    component: NotFound,
    icon: 'shield-account',
  },
];

export default tabNavigationData;
