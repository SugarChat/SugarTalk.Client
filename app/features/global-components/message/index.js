import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

export default function() {
    const StyledContainer = styled(ToastContainer).attrs({})`
        .Toastify__toast-container {}
        .Toastify__toast {
            min-height: 0;
            cursor: default;
        }
        .Toastify__toast-body {
            justify-content: center;
            padding: 0
        }
        .Toastify__progress-bar {}
        .Toastify__toast-body > div:last-child {
            flex: none;
        }
      `;
    return (
        <StyledContainer
            closeButton = { false }
            containerId = 'default'
            draggable = { false }
            hideProgressBar = { true }
            position = 'top-center'
            transition = { Slide } />
    )
}