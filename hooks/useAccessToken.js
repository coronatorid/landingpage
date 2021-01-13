import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import router from 'next/router';

function useAccessToken(redirect = {to: '/auth/login'}) {
  const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    if(!redirect.to) return;

    console.log('changed');

    if(redirect.to && !accessToken) {
      router.push(redirect.to);
    }
  }, [redirect.to, accessToken]);

  return accessToken || null;
}

export default useAccessToken;
