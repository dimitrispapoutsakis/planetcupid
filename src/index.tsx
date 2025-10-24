import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import { root } from '@lynx-js/react';
import './assets/scss/index.scss';
import { MemoryRouter, Routes, Route } from 'react-router';

import BottomBar from './components/BottomBar/BottomBar';
import { routes } from './constants/routes';

root.render(
  <MemoryRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>

    <BottomBar />
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
