import * as electron from 'electron';
import Url from 'url';
import { getGoogleToken } from "../../features/api/modules/login"

const getBrowserWindowInstance = () => {
    return new electron.remote.BrowserWindow({
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
  
      const redirectUri = 'http://localhost:3000';
  
      authWindow.loadURL(
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
          Env.googleClientId
        }&response_type=code&scope=${scope}&redirect_uri=${encodeURIComponent(
          redirectUri
        )}&include_granted_scopes=true&flowName=GeneralOAuthFlow`
      );
  
      authWindow.webContents.on('did-redirect-navigation', (_event, newUrl) => {
        if (newUrl.includes(redirectUri)) {
          getGoogleCode(newUrl);
        }
      });
  
      const getGoogleCode = async (url) => {
        try {
          if (url.indexOf('code') > -1) {
            const qs = new Url.URL(url, redirectUri).searchParams;
            const code = qs.get('code');
            getGoogleToken(code, redirectUri)
              .then((res) => {
                resolve(res.accessToken);
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