/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-green-300 hover:no-underline active:bg-green-300 rounded-lg text-base'

export default function Sidebar() {
    return (
        <div className='bg-green-900 w-60 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <span className='tracking-widest text-neutral-100 text-lg'>S!MATREN</span>
            </div>
            <div className='py-5 flex flex-1 flex-col gap-0.5 pt-2 border-t border-neutral-100 '>
                <span className='text-neutral-200 text-base'>Menu</span>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-100">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div className={classNames(linkClasses, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line no-unused-vars, react/prop-types
function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-green-900 text-white' : 'text-green-50', linkClasses)}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}