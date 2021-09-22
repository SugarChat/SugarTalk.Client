import axios from "../axios";

export const getGoogleToken = (
        code,
        redirecturi
      ) => {
        return axios.request({
            url: `/authentication/google/accessToken`,
            method: `GET`,
            params: {
              code,
              redirecturi,
            },
          })
      }