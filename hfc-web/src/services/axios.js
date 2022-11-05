import axios from 'axios';

// const env = window._env_;
// const url = "http://localhost:7280/api/";
const baseUrl = "http://localhost:5000/api";

// export default axios.create({
//   // baseURL: env && env.API_URL,
//   baseURL: url,
//   // headers: {
//   //   'Content-Type': 'application/json',
//   // },
// });

export const http = axios.create({
  baseURL: baseUrl,
});

export function noContentResponseValidator(response, message) {
  if (response.status === 204) {
    throw new Error(message);
  } else {
    return response.data;
  }
};
