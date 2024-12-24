import { useState, useEffect } from 'react';

export function useCorsAnywhere() {
  const [corsReady, setCorsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function activateCorsAnywhere() {
      try {
        const response = await fetch('/api/cors-anywhere');
        const data = await response.json();
        console.log(data);
        if (data.data) {
          console.log('CORS Anywhere đã được kích hoạt');
          setCorsReady(true);
        } else {
          console.error('Không thể kích hoạt CORS Anywhere');
          setError('Không thể kích hoạt CORS Anywhere');
        }
      } catch (error) {
        console.error('Lỗi khi kích hoạt CORS Anywhere:', error);
        setError('Lỗi khi kích hoạt CORS Anywhere');
      }
    }

    activateCorsAnywhere();
  }, []);

  return { corsReady, error };
}
