import * as React from 'react';
import { LayoutProps } from 'piral-core';
import { Menu } from 'piral-menu';

const App: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div
      className="
        d-flex
        flex-column flex-md-row
        align-items-center
        p-3
        px-md-4
        mb-3
        bg-white
        border-bottom
        box-shadow
      "
    >
      <h1 className="my-0 mr-md-auto font-weight-normal">
        <b>MyCompany</b>
      </h1>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">
          Support
        </a>
        <a className="p-2 text-dark" href="#">
          Pricing
        </a>
        <Menu type="general" />
        <span className="container-host"></span>
      </nav>
    </div>

    {children}
  </>
);

export default App;
