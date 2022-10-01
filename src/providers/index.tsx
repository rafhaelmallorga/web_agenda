import React from "react";
import { UserProvider } from "./user";

interface AppProvider {
    children: React.ReactNode;
}

const Providers = ({ children }: AppProvider) => {
    return (
        <UserProvider>{children}</UserProvider>
    );
};

export default Providers