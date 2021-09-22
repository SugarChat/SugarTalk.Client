import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Logo,
    LoginTitleWrapper,
    LoginTitle,
    TitleLine,
    LoginPageWrapper,
    LoginBtn,
    LoginRowWrapper,
    LoginBtnWrapper } from './style';
import { useLoginLogic } from './hooks';

const { loginPlatformList, onLogin } = useLoginLogic();

const LogInRow = () =>
    (<LoginRowWrapper >
        {loginPlatformList.map(item =>
            (<LoginBtnWrapper key = { item.loginType }>
                <LoginBtn
                    backgroundImage = { item.imageSrc } 
                    onClick = {() => onLogin({
                        loginType: item.loginType,
                        onSuccess: item.onSuccess,
                    })}
                    />
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


const loginPage = () => (
    <LoginPageWrapper>
        <Logo />
        <LoginTitleRow />
        <LogInRow />
    </LoginPageWrapper>
);

export default compose(connect(), withTranslation())(loginPage);
