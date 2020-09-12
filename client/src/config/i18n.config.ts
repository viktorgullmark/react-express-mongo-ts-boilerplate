import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import AppConfig from './app.config';

const configureI18n = () => {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: 'en',
      backend: {
        loadPath: '/translations/{{lng}}/{{ns}}.json',
        crossDomain: true,
      },
      fallbackLng: 'en',
      debug: !AppConfig.production,
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
      },
      react: {
        wait: true,
      },
    });
};

export default configureI18n;
