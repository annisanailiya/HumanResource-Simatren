import { MdInsertChartOutlined, MdOutlineCalendarMonth } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbWallet, TbLogout } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";
import { AiOutlineLineChart } from "react-icons/ai";

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
    path: "/manajemen_pegawai",
    icon: <HiOutlineUsers />
  },
  {
    key: "manajemen_gaji",
    label: "Manajemen Gaji",
    path: "/manajemen_gaji",
    icon: <TbWallet />
  },
  {
    key: "manajemen_presensi",
    label: "Manajemen Presensi",
    path: "/manajemen_presensi",
    icon: <MdOutlineCalendarMonth />
  },
  {
    key: "manajemen_pelatihan",
    label: "Manajemen Pelatihan",
    path: "/manajemen_pelatihan",
    icon: <VscTools />
  },
  {
    key: "manajemen_kinerja",
    label: "Manajemen Kinerja",
    path: "/manajemen_kinerja",
    icon: <AiOutlineLineChart />
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS  = [
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <TbLogout />
  }
]