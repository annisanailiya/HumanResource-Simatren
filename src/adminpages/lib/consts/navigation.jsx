import { MdInsertChartOutlined, MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbWallet, TbLogout } from "react-icons/tb";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdInsertChartOutlined />
  },
  {
    key: "manajemen_pegawai",
    label: "Manajemen Pegawai",
    path: "/pegawai",
    icon: <HiOutlineUsers />
  },
  {
    key: "manajemen_gaji",
    label: "Manajemen Gaji",
    path: "/gaji",
    icon: <TbWallet />
  },
  {
    key: "manajemen_presensi",
    label: "Manajemen Presensi",
    path: "/presensi",
    icon: <MdOutlineCalendarMonth />
  }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <TbLogout />
  }
]