import { FaUserCircle } from "react-icons/fa";
import { RiHistoryFill, RiCalendarScheduleLine } from "react-icons/ri";
import { HiChevronDown, HiAcademicCap } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { useState } from "react";

const linkClasses = "flex items-center gap-3 font-semibold px-4 py-3 hover:scale-95 hover:bg-[#98FB98] hover:text-green-900 hover:no-underline active:bg-[#98FB98] rounded-md text-sm";

export default function Sidebar({ isOpen, setIsOpen }) {
    const navigate = useNavigate()

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };
    return (
        <div className={`transition-width duration-300 ease-in-out sticky top-0 h-screen w-64 bg-green-900 flex flex-col text-white ${isOpen ? "block" : "hidden"}`}>
            <div className="flex items-center py-3 px-5">
                <span className="text-2xl font-bold tracking-tight md:tracking-super-wide">S!MATREN</span>
            </div>

            <div className="flex flex-row py-3 px-5 pt-2 border-t border-white">
                <div className="py-1">
                    <FaUserCircle className="w-7 h-7" />
                </div>
                <div className="px-5">
                    <p className="text-sm font-bold">S!MATREN</p>
                    <p className="text-[10px] font-thin">Admin</p>
                </div>
            </div>

            <hr className="pt-2 border-t border-white" />

            <div>
                <h1 className="flex py-2 px-6 text-xs font-thin">MENU</h1>
            </div>

            <div className="flex-initial w-64 px-5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}

                <div>
                    <div id="dropdownButton" onClick={toggleDropdown} className={classNames(linkClasses)}>
                        <span className="text-xl">
                            <HiAcademicCap />
                        </span>
                        Manajemen Pelatihan
                        <span className="text-xl">
                            <HiChevronDown />
                        </span>
                    </div>

                    <div id="dropdown" className={`cursor-pointer px-3 ${isDropdownVisible ? '' : 'hidden'}`}>
                        <div onClick={() => navigate('/historipelatihan')} className={classNames(linkClasses)}>
                            <span className="text-xl">
                                <RiHistoryFill />
                            </span>
                            Histori Pelatihan
                        </div>
                        <div onClick={() => navigate('/jadwalpelatihan')} className={classNames(linkClasses)}>
                            <span className="text-xl">
                                <RiCalendarScheduleLine />
                            </span>
                            Jadwal Pelatihan
                        </div>
                    </div>
                </div>
            </div>

            <hr className="p-1 border-t border-green-700 mx-5" />

            <div onClick={() => navigate('/login')} className="flex-initial w-64 px-5">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        // eslint-disable-next-line react/prop-types
        <Link to={item.path} className={classNames(
            // eslint-disable-next-line react/prop-types
            pathname === item.path ? "bg-[#98FB98] text-green-900" : "bg-green-900 text-white",
            linkClasses)}>

            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    );
}