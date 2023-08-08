import React from 'react';
import Area from '@components/common/Area';
import './Layout.scss';

export default function Layout() {
  return (
    <>
      <div className="header flex justify-between">
        <Area id="header" noOuter />
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
          <div>
            <div className="card-icons flex justify-center space-x-1 md:justify-start">
              <div>
              <img src='./logo.svg' style={{ height: '80px' }} alt="Pharmacoin" />
              </div>
            </div>
          </div>
          <div className="self-center">
            <div className="copyright text-center md:text-right text-textSubdued">
              <span>Copyright © 2020 Pharmacoin</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  id: 'layout',
  areaId: 'body',
  sortOrder: 1
};
