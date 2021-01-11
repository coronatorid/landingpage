import React from 'react';
import SiteLayout from './SiteLayout';
import CrewLayout from './CrewLayout';

const Layout = (props) => {
  switch (props.name) {
    case 'crew':
      return <CrewLayout {...props} />

    default:
      return <SiteLayout {...props} />;
  }
}

export default Layout;
