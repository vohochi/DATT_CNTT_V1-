// hooks/useCorsAnywhere.js hoặc utils/corsAnywhere.js

import { useState, useEffect } from 'react';

const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';

export function useCorsAnywhere() {
  const [corsReady, setCorsReady] = useState(false);

  useEffect(() => {
    async function activateCorsAnywhere() {
      try {
        const response = await fetch(CORS_ANYWHERE_URL, {
          method: 'GET',
          headers: {
            Origin: process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000',
          },
        });

        if (response.ok) {
          console.log('CORS Anywhere đã được kích hoạt');
          setCorsReady(true);
        } else {
          console.error('Không thể kích hoạt CORS Anywhere');
          setCorsReady(false);
        }
      } catch (error) {
        console.error('Lỗi khi kích hoạt CORS Anywhere:', error);
        setCorsReady(false);
      }
    }

    activateCorsAnywhere();
  }, []);

  return corsReady;
}
