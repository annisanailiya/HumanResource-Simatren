import { FaUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbWallet, TbLogout } from "react-icons/tb";
import { HiAcademicCap, HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiCalendarScheduleLine } from "react-icons/ri";

export const USER_SIDEBAR_LINKS = [
  {
    key: "profil",
    label: "Profil",
    path: "/user",
    icon: <FaUser />
  },
  {
    key: "presensi_user",
    label: "Presensi",
    path: "/user/presensi",
    icon: <MdOutlineCalendarMonth />
  },
  {
    key: "gaji_user",
    label: "Penggajian",
    path: "/user/gaji",
    icon: <TbWallet />
  },
  {
    key: "cuti",
    label: "Cuti",
    path: "/user/cuti",
    icon: <RiCalendarScheduleLine />
  },
  {
    key: "pelatihan_user",
    label: "Pelatihan",
    path: "/user/pelatihan",
    icon: <HiAcademicCap />
  },
  {
    key: "kinerja_user",
    label: "Grafik Kinerja",
    path: "/user/kinerja",
    icon: <HiOutlinePresentationChartLine />
  }
]

export const USER_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <TbLogout />
  }
]