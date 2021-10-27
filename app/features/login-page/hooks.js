import { googleAuthenticated, facebookAuthenticated } from "./login-service"
import Api from "../../features/api/modules/login"
import store  from "../redux/store";
import { push } from 'react-router-redux';
import { updateUserInfo, updateAccessToken } from '../login-page/action';

export const useLoginLogic = () => {
    const onHandleError = () => {
        console.log('Login fail');
      };

    const loginPlatformList = [
        {
            loginType: 'Wechat',
            imageSrc: '../app/images/wechat.png',
            onSuccess: () => {}
        },
        {
            loginType: 'Google',
            imageSrc: '../app/images/google.png',
            onSuccess: async () => {
                const { data } = await Api.sign()
                if(data.code === 20000) {
                    localStorage.setItem("USER_INFO", JSON.stringify(data.data))
                    store.dispatch(updateUserInfo(data.data))
                    store.dispatch(push('/welcome'))
                }
            }
        },
        {
            loginType: 'Facebook',
            imageSrc: '../app/images/facebook.png',
            onSuccess: () => {}
        }
    ];

    const onLogin = async ({loginType, onSuccess}) => {
        try {
            switch(loginType) {
                case "Google":
                    await googleAuthenticated().then(({idToken}) =>{
                        localStorage.setItem("ACCESS_TOKEN", idToken);
                        store.dispatch(updateAccessToken(idToken));
                        onSuccess()
                    }).catch((error) => {
                        // onHandleError()
                    })
                    break
                case 'Wechat': 
                    break
                case 'Facebook':
                    return
                    await facebookAuthenticated().then((result) =>{
                        console.log(result);
                    }).catch(() =>{
                        // onHandleError()
                    })
                    break
            }
        } catch (error) {
        }
    }

    return {
        onLogin,
        loginPlatformList
    };
};
