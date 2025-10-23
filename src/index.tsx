import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import { root } from '@lynx-js/react';
import './assets/scss/index.scss';
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from '@/components/App/App';

root.render(
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
