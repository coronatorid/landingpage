import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SiteLayout = (props) => {
  return (
    <>
      <Header />
      <div className="min-h-full pt-16">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default SiteLayout;
