import * as React from 'react';

export const Tile: React.FC<any> = () => {
  return (
    <>
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Statistic</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          243 <small className="text-muted">users registered</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>
            <strong>152</strong> users active now
          </li>
          <li>
            <strong>12</strong> admins registered with tenant
          </li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">
          Manage users
        </button>
      </div>
    </>
  );
};
