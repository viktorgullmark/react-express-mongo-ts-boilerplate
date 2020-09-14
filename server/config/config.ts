import devConfig from './config.dev';
import prodConfig from './config.prod';

const selectedConfiguration =
  process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export default selectedConfiguration;