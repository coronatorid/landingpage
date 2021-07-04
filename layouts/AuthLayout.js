import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import router from 'next/router';

const AuthLayout = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-3 w-full bg-lightCoral"></div>
        <div className="py-5 flex">
          <div>
            <img src="/icons/logo.png" alt="Coronator Logo" className="h-12 w-12" />
          </div>
        </div>
      </div>
      <div className=" max-w-screen-sm mx-auto">
          {props.children}
      </div>
    </>
  )
}

export default AuthLayout;
