import 'url-search-params-polyfill';

import '@lynx-js/preact-devtools';
import '@lynx-js/react/debug';
import { root } from '@lynx-js/react';
import './assets/scss/index.scss';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'],
});
 
const router = createRouter({
  routeTree,
  history: memoryHistory,
  isServer: false, // Set to false for LynxJS environment
});

export function App() {
  return <RouterProvider router={router} />;
}

root.render(<App />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
