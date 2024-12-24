// // pages/api/activate-cors-anywhere.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     console.log('Bắt đầu kích hoạt CORS Anywhere');

//     // Lấy form và token
//     const formResponse = await fetch(
//       'https://cors-anywhere.herokuapp.com/corsdemo'
//     );
//     const formData = await formResponse.text();

//     console.log('Nhận được form data:', formData.substring(0, 100) + '...');

//     // Trích xuất giá trị accessRequest
//     const match = formData.match(/name="accessRequest" value="([^"]+)"/);
//     if (!match) {
//       throw new Error('Không tìm thấy accessRequest token');
//     }
//     const accessToken = match[1];

//     console.log('Access token:', accessToken);

//     // Gửi yêu cầu POST để kích hoạt
//     const activateResponse = await fetch(
//       'https://cors-anywhere.herokuapp.com/corsdemo',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `accessRequest=${accessToken}`,
//       }
//     );

//     const activateData = await activateResponse.text();

//     console.log('Kết quả kích hoạt:', activateData.substring(0, 100) + '...');

//     if (
//       activateData.includes(
//         'You currently have temporary access to the demo server'
//       )
//     ) {
//       console.log('Kích hoạt thành công');
//       res
//         .status(200)
//         .json({ success: true, message: 'CORS Anywhere đã được kích hoạt' });
//     } else {
//       console.log('Kích hoạt thất bại');
//       res
//         .status(400)
//         .json({ success: false, message: 'Không thể kích hoạt CORS Anywhere' });
//     }
//   } catch (error) {
//     console.error('Lỗi trong API route:', error);
//     res.status(500).json({
//       success: false,
//       message: error instanceof Error ? error.message : 'Lỗi không xác định',
//     });
//   }
// }
