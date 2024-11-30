import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5500/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// axiosClient.interceptors.response.use(
//   (res) => {
//     // Trả về kết quả nếu thành công
//     return res;
//   },
//   async (err) => {
//     const originalRequest = err.config;
//     if (
//       err.response &&
//       err.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         // Sử dụng axiosClient để đảm bảo baseURL và các config khác
//         const res = await axiosClient.post('/auths/refresh-token');
//         const newAccessToken = res.data.accessToken;

//         // Cập nhật token mới vào localStorage
//         localStorage.setItem('token', newAccessToken);

//         // Cập nhật header Authorization của yêu cầu ban đầu và thực hiện lại yêu cầu
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axiosClient(originalRequest);
//       } catch (error) {
//         // Xóa token khi refresh token không còn hợp lệ
//         localStorage.removeItem('token');
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(err);
//   }
// );

export default axiosClient;
