import * as React from 'react';

const Loading: React.FC = () => (
  <div className="loading-wrapper">
    <div className="loading">
      <div className="bulletouter">
        <div className="bulletinner"></div>
        <div className="mask"></div>
        <div className="dot"></div>
      </div>
      <p>loading!</p>
    </div>
  </div>
);

export default Loading;
