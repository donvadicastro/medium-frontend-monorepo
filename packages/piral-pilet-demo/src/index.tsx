import * as React from 'react';
import { PiletApi } from '@donvadicastro/intapp-host-demo';
import { Menu } from './components/Menu';
import { Tile } from './components/Tile';
import { Page } from './components/Page';

export function setup(app: PiletApi) {
  app.registerPage('/users', Page);
  app.registerTile(Tile);
  app.registerMenu(Menu);
}
