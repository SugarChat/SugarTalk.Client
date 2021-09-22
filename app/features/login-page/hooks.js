import { googleAuthenticated } from "./login-service"

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
            onSuccess: async () => {}
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
                        onSuccess()
                    }).catch((error) => {
                        console.log(error);
                        // onHandleError()
                    })
                    break
                case 'Wechat': 
                    break
                case 'Facebook':
                    break
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        onLogin,
        loginPlatformList
    };
};
