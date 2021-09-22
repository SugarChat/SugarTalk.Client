import {} from "./login-service"

export const useLoginLogic = () => {

    const onHandleError = () => {
        enqueueSnackbar('Login fail', {
          variant: 'error',
          autoHideDuration: 6000,
        });
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
                    }).catch(() => {
                        onHandleError()
                    })
                    break
                case 'Wechat': 
                    break
                case 'Facebook':
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
