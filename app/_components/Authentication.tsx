"use client"
import React from 'react';
import { account } from '@/configs/appwriteConfig'; // your appwrite config
import { OAuthProvider } from 'appwrite';

function Authentication({ children }: any) {
    const onButtonPress = async () => {
        try {
            account.createOAuth2Session(
                OAuthProvider.Google,
                `${window.location.origin}/success`, // success redirect
                `${window.location.origin}/error`    // failure redirect
            );
        } catch (error) {
            console.error("OAuth2 login failed", error);
        }
    };

    return (
        <div onClick={onButtonPress}>
            {children}
        </div>
    );
}

export default Authentication;
