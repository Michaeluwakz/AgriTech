import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to AgriTech',
      search: 'Search for products',
      login: 'Login',
      signup: 'Sign Up',
      dashboard: 'Dashboard',
      products: 'Products',
      orders: 'Orders',
      profile: 'Profile',
      signout: 'Sign Out',
      cart: 'Shopping Cart'
    }
  },
  yo: {
    translation: {
      welcome: 'E kaabo si AgriTech',
      search: 'Wa awọn ọja',
      login: 'Wọle',
      signup: 'Forukọsilẹ',
      dashboard: 'Dasibodu',
      products: 'Awọn ọja',
      orders: 'Awọn aṣẹ',
      profile: 'Profaili',
      signout: 'Jade',
      cart: 'Kẹkẹ Rira'
    }
  },
  ha: {
    translation: {
      welcome: 'Barka da zuwa AgriTech',
      search: 'Bincika kayayyaki',
      login: 'Shiga',
      signup: 'Yi Rijista',
      dashboard: 'Dashbod',
      products: 'Kayayyaki',
      orders: 'Oda',
      profile: 'Bayani',
      signout: 'Fita',
      cart: 'Kwandon Saya'
    }
  },
  ig: {
    translation: {
      welcome: 'Nnọọ na AgriTech',
      search: 'Chọọ ngwongwo',
      login: 'Banye',
      signup: 'Debanye aha',
      dashboard: 'Dashboard',
      products: 'Ngwongwo',
      orders: 'Iwu',
      profile: 'Profaịlụ',
      signout: 'Pụọ',
      cart: 'Ụgbọ azụmahịa'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;