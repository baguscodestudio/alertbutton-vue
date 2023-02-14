import type { App } from 'vue';
import components from './components';

export default {
  install(app: App) {
    app.component('SpecialButton', components.SpecialButton);
    app.component('Alert', components.Alert);
  },
};
