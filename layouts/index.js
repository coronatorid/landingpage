import React from 'react';
import SiteLayout from './SiteLayout';
import CrewLayout from './CrewLayout';
import AuthLayout from './AuthLayout';

const Layout = (props) => {
  switch (props.name) {
    case 'crew':
      return <CrewLayout {...props} />

    case 'auth':
      return <AuthLayout {...props} />

    default:
      return <SiteLayout {...props} />;
  }
}

export default Layout;
