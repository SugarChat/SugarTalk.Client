import React from 'react';
import { Logo,
    LoginTitleWrapper,
    LoginTitle,
    TitleLine,
    LoginPageWrapper,
    LoginBtn,
    LoginRowWrapper,
    LoginBtnWrapper } from './style';
import { useLoginLogic } from './hooks';



export default function loginPage() {
    const { loginPlatformList, onLogin} = useLoginLogic();

    const LogInRow = () =>
        (<LoginRowWrapper >
            {loginPlatformList.map(item =>
                (<LoginBtnWrapper key = { item.loginType } 
                    onClick={()=> 
                    onLogin({
                        loginType: item.loginType,
                        onSuccess: item.onSuccess
                    })
                }>
                    <LoginBtn
                        backgroundImage = { item.imageSrc } />
                    <div
                        style = {{ textAlign: 'center',
                            marginTop: '0.4rem' }}>{item.loginType}</div>
                </LoginBtnWrapper>)
            )
            }
        </LoginRowWrapper>);


    const LoginTitleRow = () => (
        <LoginTitleWrapper>
            <TitleLine />
            <LoginTitle>
                登陆方式
            </LoginTitle>
            <TitleLine />
        </LoginTitleWrapper>
    );

    return (<LoginPageWrapper>
        <Logo />
        <LoginTitleRow />
        <LogInRow />
    </LoginPageWrapper>);
}

// export default compose(connect(), withTranslation())(loginPage);
