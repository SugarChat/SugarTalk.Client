export const useLoginLogic = () => {
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

    return {
        loginPlatformList
    };
};
