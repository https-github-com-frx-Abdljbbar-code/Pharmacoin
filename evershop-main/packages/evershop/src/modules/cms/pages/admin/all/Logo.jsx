import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  return (
    <div className="">
      <a href={dashboardUrl} className="flex items-end">
        <img className='logo' src='./logo.svg' style={{ height: '70px' }} alt="Pharmacoin" />
          <small className="font-bold"></small>
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
