import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import router from 'next/router';

function useAccessToken(redirectIfNotFoundTo = '/auth/login') {
  const accessToken = Cookies.get('accessToken');

  useEffect(() => {
    if(!redirectIfNotFoundTo) return;

    if(redirectIfNotFoundTo && !accessToken) {
      router.push(redirectIfNotFoundTo);
    }
  }, [redirectIfNotFoundTo, accessToken]);

  return accessToken || null;
}

export default useAccessToken;
