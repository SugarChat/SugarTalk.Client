import { googleAuthenticated, facebookAuthenticated } from "./login-service"
import Api from "../../features/api/modules/login"
import store  from "../redux/store";
import { push } from 'react-router-redux';
import { updateUserInfo, updateAccessToken } from '../login-page/action';
import { toast } from 'react-toastify';
import wechatImage from '../../images/wechat.png';
import googleImage from '../../images/google.png';
import facebookImage from '../../images/facebook.png';

export const useLoginLogic = () => {
    const onHandleError = () => {
        toast.error(
            'Log in fail',
            { 
                containerId: 'default',
                autoClose: 3000,
                bodyStyle: { background: 'transparent' },
                style: { background: '#1B2638', color: '#ccc' } }
        );
    };

    const loginPlatformList = [
        {
            loginType: 'Wechat',
            imageSrc: wechatImage,
            onSuccess: () => {}
        },
        {
            loginType: 'Google',
            imageSrc: googleImage,
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
            imageSrc: facebookImage,
            onSuccess: () => {}
        }
    ];

    const onLogin = async ({loginType, onSuccess}) => {
        window.openLoading();
        try {
            switch(loginType) {
                case "Google":
                    await googleAuthenticated().then(({idToken}) =>{
                        localStorage.setItem("ACCESS_TOKEN", idToken);
                        store.dispatch(updateAccessToken(idToken));
                        onSuccess();
                    }).catch((error) => {
                        onHandleError();
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
        } finally {
            window.closeLoading();
        }
    }

    return {
        onLogin,
        loginPlatformList
    };
};
