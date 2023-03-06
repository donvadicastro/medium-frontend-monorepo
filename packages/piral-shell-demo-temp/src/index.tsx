import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral } from 'piral-core';
import { createMenuApi } from 'piral-menu';
import { home, layout, errors } from './layout';
import { createDashboardApi } from 'piral-dashboard';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      '/': home,
    },
  },
  plugins: [createMenuApi(), createDashboardApi()],
  requestPilets() {
    return fetch('https://feed.piral.cloud/api/v1/pilet/medium-piral-demo')
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

createRoot(document.querySelector('#app'))
  .render(<Piral instance={instance} />);
