// // utils/api.ts
// import axios, { AxiosRequestConfig } from 'axios';

// const DEFAULT_HEADERS = {
//   allowed_secrets:
//     'c3f72a381e7f676c21b7fca43fbe60a99aa5ff5dfc76b75993da7bd3032e3f9f',
//   'Content-Type': 'application/json',
// };

// export async function axiosWithRetry<T>(
//   url: string,
//   maxRetries = 3,
//   options: AxiosRequestConfig = {}
// ): Promise<T> {
//   for (let i = 0; i < maxRetries; i++) {
//     try {
//       const response = await axios({
//         ...options,
//         url,
//         headers: {
//           ...DEFAULT_HEADERS,
//           ...options.headers,
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       if (error.response?.status === 429) {
//         const waitTime = parseInt(error.response.headers['retry-after'] || '5');
//         await new Promise((resolve) => setTimeout(resolve, waitTime * 1000));
//         continue;
//       }

//       if (i === maxRetries - 1) throw error;
//       await new Promise((resolve) =>
//         setTimeout(resolve, Math.pow(2, i) * 1000)
//       );
//     }
//   }
//   throw new Error('Max retries reached');
// }
