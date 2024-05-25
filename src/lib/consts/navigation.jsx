import {
    HiOutlineViewGrid,
    HiUserGroup,
    HiOutlineDocumentText,
    HiOutlineQuestionMarkCircle,
} from 'react-icons/hi'
import { 
    HiCurrencyDollar, 
    // HiPresentationChartLine,
} from "react-icons/hi2";


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'pegawai',
        label: 'Manajemen Pegawai',
        path: '/pegawai',
        icon: <HiUserGroup />
    },
    {
        key: 'gaji',
        label: 'Manajemen Gaji',
        path: '/gaji',
        icon: <HiCurrencyDollar />
    },
    {
        key: 'presensi',
        label: 'Manajemen Presensi',
        path: '/presensi',
        icon: <HiOutlineDocumentText />
    },
    // {
    //     key: 'pelatihan',
    //     label: 'Manajemen Pelatihan',
    //     path: '/pelatihan',
    //     icon: <HiAcademicCap />
    // }
    // {
    //     key: 'kinerja',
    //     label: 'Manajemen Kinerja',
    //     path: '/kinerja',
    //     icon: <HiPresentationChartLine />
    // }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]