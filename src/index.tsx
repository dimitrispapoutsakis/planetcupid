import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import { root } from '@lynx-js/react';
import './assets/scss/index.scss';

import { App } from '@/components/App/App';

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
