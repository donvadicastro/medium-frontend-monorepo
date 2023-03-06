import { ComponentsState, ErrorComponentsState } from 'piral-core';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import App from './components/App';
import { DashboardContainer } from './components/DashboardContainer';
import { DashboardTile } from './components/DashboardTile';
import Loading from './components/Loading';

export const home: React.FC = () => <Redirect to="/browse" />;

export const layout: Partial<ComponentsState> = {
  Layout: App,
  DashboardTile: DashboardTile,
  DashboardContainer: DashboardContainer,
  LoadingIndicator: Loading,
};

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => <div />,
};
