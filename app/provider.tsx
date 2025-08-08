'use client';
import { AuthContext } from '@/context/AuthContext';
import { account } from '@/configs/appwriteConfig';
import { Models } from 'appwrite';
import React, { useContext, useEffect, useState } from 'react';

interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
}

function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const currentUser = await account.get();
                setUser(currentUser);
            } catch (error) {
                setUser(null);
            }
        };

        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook
export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};

export default Provider;
