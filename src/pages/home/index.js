import './index.sass';
import './index.pug';
import './main/index.sass';
import './about/index.sass';
import initGallery from './gallery';
import './travel/index.sass';
import './tour/index.sass';
import './callback/index.sass';

export default () => {
  initGallery();
};
