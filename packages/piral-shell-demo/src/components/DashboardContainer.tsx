import * as React from 'react';

export const DashboardContainer: React.FC<any> = ({ children }) => (
  <>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <p className="lead">
        Dashboard is an application starting point and shows product tiles. Tile
        is small UI widget that product want to shows when user navigates to
        shell.
      </p>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Signin offer</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $0 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Sign up for free
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Referral program</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $50 <small className="text-muted">/ user</small>
            </h1>
            <p>After each user registration.</p>
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Create referral link
            </button>
          </div>
        </div>

        {children}
        <div className="container-host"></div>
      </div>
    </div>
  </>
);
