import styled from 'styled-components';

export const OverLay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: transparent;
z-index: 1000;
`;

export const SpinnerWrapper = styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;
