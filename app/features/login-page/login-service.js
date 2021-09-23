import Api from "../../features/api/modules/login"
import Env from "../config/env"

const getBrowserWindowInstance = () => {
     return new window.electron.remote.BrowserWindow({
      show: true,
      width: 375,
      height: 668,
      movable: true,
      modal: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
    });
  };

export const googleAuthenticated = () => {
    return new Promise((resolve, reject) => {
      const authWindow = getBrowserWindowInstance();

      authWindow.webContents.userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0';

      const scope = encodeURIComponent(
        'https://www.googleapis.com/auth/userinfo.email'
      );
  
      const redirectUrl = 'http://localhost:3000';
  
      authWindow.loadURL(
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
          Env.googleClientId
        }&response_type=code&scope=${scope}&redirect_uri=${encodeURIComponent(
          redirectUrl
        )}&include_granted_scopes=true&flowName=GeneralOAuthFlow`
      );
  
      authWindow.webContents.on('did-redirect-navigation', (_event, newUrl) => {
        if (newUrl.includes(redirectUrl)) {
          getGoogleCode(newUrl);
        }
      });
  
      const getGoogleCode = async (url) => {
        try {
          if (url.indexOf('code') > -1) {
            const qs = new window.Url.URL(url, redirectUrl).searchParams;
            const code = qs.get('code');
            await Api.getGoogleToken(code, redirectUrl)
              .then((res) => {
                resolve(res.data.accessToken);
              })
              .catch((error) => reject(error));
          }
        } catch (e) {
          reject(e);
        } finally {
        }
      };
      authWindow.on('close', () => {
      });
    });
  };