import React from "react";
import { ModalProvider } from "./modal";
import { UserProvider } from "./user";

interface AppProvider {
    children: React.ReactNode;
}

const Providers = ({ children }: AppProvider) => {
    return (
        <UserProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </UserProvider>
    );
};

export default Providers