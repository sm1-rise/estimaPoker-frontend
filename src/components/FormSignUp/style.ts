import styled from 'styled-components';

export const LoginContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export const Divider = styled.div`
    margin: 20px 0;
    position: relative;
    text-align: center;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        border-top: 1px solid #ccc;
        z-index: 1;
    }

    span {
        background-color: #fff;
        padding: 0 10px;
        position: relative;
        z-index: 2;
    }
`;

export const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const SocialButton = styled.button`
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #f8f9fa;
    }
`;

export const Footer = styled.div`
    margin-top: 20px;
    font-size: 14px;
`;