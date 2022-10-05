import React from "react";
import { AgendaProvider } from "./agenda";
import { ModalProvider } from "./modal";
import { UserProvider } from "./user";

interface AppProvider {
    children: React.ReactNode;
}

const Providers = ({ children }: AppProvider) => {
    return (
        <UserProvider>
            <ModalProvider>
                <AgendaProvider>
                    {children}
                </AgendaProvider>
            </ModalProvider>
        </UserProvider>
    );
};

export default Providers