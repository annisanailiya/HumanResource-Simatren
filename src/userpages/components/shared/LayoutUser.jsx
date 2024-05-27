import { Outlet } from "react-router-dom";
import { useState } from "react";
import SidebarUser from "./SidebarUser";
import HeaderUser from "./HeaderUser";


export default function LayoutUser() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <SidebarUser isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col ${isOpen ? 'ml-64' : 'ml-16'} transition-all duration-300 ease-in-out flex-1">
                <HeaderUser isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}