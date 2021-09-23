import axios from "../axios";

export default {
  getGoogleToken: (code, redirecturi) => {
    return axios.request({
        url: `/authentication/google/accessToken`,
        method: `GET`,
        params: {
          code,
          redirecturi,
        },
      })
    },
  sign: () => {
    return axios.request({
      url: "/user/signin",
      method: "GET"
    })
  },
  facebookSign: (code) => {
    return axios.request({
      url: '/xxx/facebookSign',
      method: "GET",
      params: {
        code
      }
    })
  }
}
